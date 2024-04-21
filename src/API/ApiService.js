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
			ApiService.infoUserIsCard(navigate);
    });
  }
  // Функция для обновления токена
  static async refreshToken(refresh) {
    try {
      axiosInstanсe
        .post('/jwt-auth/refresh-token/', { refresh: refresh })
        .then((response) => {
          const newToken = response.data.access;
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
				console.log(res.data);
				setItems(itemsBenefit)
			})
    } catch (e) {
      console.log(e);
    }
  }
	// Изменение статуса карты
	static async changeStatusCard(id, setIsModal, setItems) {
    try {
      await axiosInstanсe.patch(`/api/cards/${id}/`, {status: 'Принята', category: 'Льготный'}).then(() => {
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
	static async infoUserCard(setUserCard, setIsLoading, setCard) {
    try {
      axiosInstanсe.get('/jwt-auth/user-info/').then((res) => {
        const items = res.data.cards.map(item => item.status === 'Принята');
				console.log(items);
        setUserCard(items[0]);
				setCard(res.data.cards)
				setIsLoading(false)
      });
    } catch (e) {
      console.log(e);
			setIsLoading(false)
    }
  }
	static async infoUserIsCard(navigate) {
    try {
      axiosInstanсe.get('/jwt-auth/user-info/').then((res) => {
        const isAdmin = res.data.is_staff;
				if (isAdmin) {
					navigate('/moderator')
				} else {
					navigate('/home')
				}
      });
    } catch (e) {
      console.log(e);
    }
  }
// Получение всех мероприятий
	static async getEvents(setEvents) {
    try {
      axiosInstanсe.get('/api/events/').then((res) => {
				setEvents(res.data);
      });
    } catch (e) {
      console.log(e);
    }
  }
	// Получение всех маркеров больницы
	static async getMarkerHospitals(setMarker) {
    try {
      axiosInstanсe.get('/api/hospitals/').then((res) => {
				setMarker(res.data);
      });
    } catch (e) {
      console.log(e);
    }
  }
	static async getMarkerBanks(setMarker) {
    try {
      axiosInstanсe.get('/api/banks/').then((res) => {
				setMarker(res.data);
      });
    } catch (e) {
      console.log(e);
    }
  }
	
}
