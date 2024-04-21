import axios from 'axios';

const axiosInstanсe = axios.create({
  baseURL: 'http://new-team.space',
});

axiosInstanсe.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem('access');
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

export default class ApiService {
  // Регистрация пользователя
  static async sendingDateReg(data, setError, navigate) {
    try {
      await axiosInstanсe.post('/jwt-auth/register-user/', data).then(() => {
				navigate('/home')
			});
    } catch {
      setError('Ваш регион не Ростовская область');
    }
  }
  // Авторизация пользователя
  static async sendingDateAuth(email, password, navigate) {
    const data = { email, password };
    axiosInstanсe.post('/jwt-auth/get-token/', data).then((response) => {
      localStorage.setItem('access', response.data.access);
      localStorage.setItem('refresh', response.data.refresh);
      navigate('/home');
    });
  }
  // Функция для обновления токена
  static async refreshToken(refresh) {
    try {
      axiosInstanсe
        .post('/jwt-auth/refresh-token/', { refresh: refresh })
        .then((response) => {
          const newToken = response.data.token;
          localStorage.setItem('access', newToken);
        });
    } catch (error) {
      console.error('Ошибка при обновлении токена:', error);
    }
  }
  // Создание карты
  static async sendingDateCard(category, owner, file) {
    const formData = new FormData();
    formData.append('category', category);
    formData.append('owner', owner);
    if (file) {
      formData.append('certificate', file);
    }
    try {
      const response = axiosInstanсe.post('/api/cards/', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      return response;
    } catch (e) {
      console.log(e);
    }
  }
	// Получение всех социальных карт
	static async getCards(setItems) {
    try {
      await axiosInstanсe.get('/api/cards/').then((res) => {
				const itemsBenefit = res.data.filter(item => item.status === 'Отправлена на модерацию');
				console.log(itemsBenefit);
				setItems(itemsBenefit)
			})
    } catch (e) {
      console.log(e);
    }
  }
	// Изменение статуса карты
	static async changeStatusCard(id, userId, setIsModal, setItems) {
    try {
      await axiosInstanсe.put(`/api/cards/${id}/`, {status: 'Принята', category: 'Льготный', owner: userId}).then(() => {
				ApiService.getCards(setItems)
				setIsModal(false);
			})
    } catch (e) {
      console.log(e);
    }
  }

  // Информация о id пользователя
  static async infoUserId(setUserId) {
    try {
      axiosInstanсe.get('/jwt-auth/user-info/').then((res) => {
        const idUser = res.data.id;
        setUserId(idUser);
      });
    } catch (e) {
      console.log(e);
    }
  }
	 // Информация о staff пользователя
	 static async infoUserStaff(setIsModer, setIsLoading) {
    try {
      axiosInstanсe.get('/jwt-auth/user-info/').then((res) => {
        const isStaff = res.data.is_staff;
        setIsModer(isStaff);
				setIsLoading(false)
      });
    } catch (e) {
      console.log(e);
			setIsLoading(false)
    }
  }
	static async infoUserCard(setUserCard, setIsLoading) {
    try {
      axiosInstanсe.get('/jwt-auth/user-info/').then((res) => {
				console.log(res.data);
        const isCard = res.data.cards.length >= 1 ? true : false;
        setUserCard(isCard);
				setIsLoading(false)
      });
    } catch (e) {
      console.log(e);
			setIsLoading(false)
    }
  }
}
