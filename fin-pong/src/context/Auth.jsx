import React, { useState, useEffect } from 'react';
import axios from 'axios';

const YourComponent = () => {
  const [accessToken, setAccessToken] = useState(null);
  const [userData, setUserData] = useState(null);

  const handleLogin = () => {
    // 42Intra'nın yetkilendirme sayfasına yönlendiren URL'yi oluşturun
    const authorizationUrl = `https://api.intra.42.fr/oauth/authorize?client_id=u-s4t2ud-759580fc23449c7d78147146e254947c7eb04235b8e0694a195909836988df92&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2F&response_type=code&scope=public`;

    // Kullanıcıyı yetkilendirme sayfasına yönlendirin
    window.location.href = authorizationUrl;
  };

  useEffect(() => {
    // URL'den authorization code'u çekme
    const urlParams = new URLSearchParams(window.location.search);
    const authorizationCode = urlParams.get('code');

    if (authorizationCode) {
      // Authorization code'u kullanarak access token talebi
      axios.post('https://api.intra.42.fr/oauth/token', {
        grant_type: 'authorization_code',
        client_id: 'u-s4t2ud-759580fc23449c7d78147146e254947c7eb04235b8e0694a195909836988df92',
        client_secret: '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', // Bu bilgi güvenli bir şekilde saklanmalıdır
        code: authorizationCode,
        redirect_uri: 'http://localhost:3000/',
      })
      .then(response => {
        const newAccessToken = response.data.access_token;
        setAccessToken(newAccessToken);

        // Access token ile API'ye istek atma işlemleri burada yapılabilir
        // Örnek olarak, kullanıcı bilgilerini getiren bir API isteği:
        axios.get('https://api.intra.42.fr/v2/me', {
          headers: {
            Authorization: `Bearer ${newAccessToken}`,
          },
        })
        .then(userResponse => {
          const userData = userResponse.data;
          console.log('User Data:', userData);
          setUserData(userData);
        })
        .catch(error => {
          console.error('Error fetching user data:', error.message);
        });
      })
      .catch(error => {
        console.error('Error fetching access token:', error.message);
      });
    }
  }, []);

  return (
    <div>
      <button onClick={handleLogin}>Login with 42Intra</button>
    </div>
  );
};

export default YourComponent;