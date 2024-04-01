import Cookies from 'js-cookie';

const getJwtToken = () => {
    const jwtToken = Cookies.get('jwtToken');
    console.log(jwtToken);
    return jwtToken;
};

export default getJwtToken;
