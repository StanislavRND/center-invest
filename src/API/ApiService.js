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
  static async sendingDateReg(data, setError) {
    try {
      const response = await axiosInstanсe.post('/jwt-auth/register-user/', data);
      return response;
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
          localStorage.setItem('accessToken', newToken);
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
	static async getCards(setItems) {
    try {
      await axiosInstanсe.get('/api/cards/').then((res) => {
				const itemsBenefit = res.data.filter(item => item.category === 'Льготный');
			})
    } catch (e) {
      console.log(e);
    }
  }
  // Информация о пользователе
  static async infoUser(setUserId) {
    try {
      axiosInstanсe.get('/jwt-auth/user-info/').then((res) => {
        const idUser = res.data.id;
        setUserId(idUser);
      });
    } catch (e) {
      console.log(e);
    }
  }
}
