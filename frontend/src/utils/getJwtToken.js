import Cookies from 'js-cookie';

const getJwtToken = () => {
    const jwtToken = Cookies.get('access-token');
    return jwtToken;
};

export default getJwtToken;
