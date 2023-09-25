import { useState } from 'react';

const useLogin = () => {
const [formData, setFormData] = useState({
    email: '',
    password: '',
});

const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
    ...prevFormData,
    [name]: value,
    }));
};



return { formData, handleChange};
};

export default useLogin;
