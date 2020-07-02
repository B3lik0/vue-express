import Api from '@/services/Api'

export default{
    register (credentials){
        return Api().post('register', credentials)
    }
}

/*
AuthenticatorService.register({
    email: 'jose@gmail.com',
    password: '123'
})*/