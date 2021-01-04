<template>
    <v-container>
        <v-row>
            <v-col md="12">
                <v-tabs v-model="tabNumber" class="text-center" centered>
                    <v-tab >Войти</v-tab>
                    <v-tab >Регистрация</v-tab>
                </v-tabs>
            </v-col>
            <v-col md="12">
                <v-form ref="form" lazy-validation @submit="login" v-if="tabNumber == 0">
                    <v-row class="input-wrapp">
                        <v-text-field :rules="emailRules" label="E-mail" required v-model="email"></v-text-field>
                    </v-row>
                    <v-row class="input-wrapp">
                        <v-text-field :rules="passwordRules" label="Пароль" type="password" required v-model="pass"></v-text-field>
                    </v-row>
                    <v-row class="input-wrapp">
                        <v-btn class="mr-4" @click="login">Войти</v-btn>
                    </v-row>
                </v-form>
                <v-form ref="form" lazy-validation @submit="sign" v-else>
                    <v-row class="input-wrapp">
                        <v-text-field :rules="emailRules" label="E-mail" required v-model="email"></v-text-field>
                    </v-row>
                    <v-row class="input-wrapp">
                        <v-text-field :rules="passwordRules" label="Пароль" type="password" required v-model="pass"></v-text-field>
                    </v-row>
                    <v-row class="input-wrapp">
                        <v-btn class="mr-4" @click="login">Регистрация</v-btn>
                    </v-row>
                </v-form>
            </v-col>
        </v-row>

    </v-container>

</template>

<script>
export default {
    methods: {
        login: function(e) {
            e.preventDefault()
        },
        sign: function(e) {
            e.preventDefault()
        }
    },
    watch: {
        tabNumber: function(val) {
            this.email = ''
            this.pass = ''
        }
    },
    data: () => ({
        valid: false,
        email: '',
        emailRules: [
            v => !!v || 'Не может быть пустым',
            v => /.+@.+\..+/.test(v) || 'Неверный email адрес',
        ],
        pass: '',
        passwordRules: [
            v => !!v || 'Пароль не может быть пустым',
            v => (v && v.length >= 6) || 'Пароль должен быть больше 6 символов',
        ],
        tabNumber: 0,
    })

}
</script>

<style>
    .input-wrapp {
        margin-top: 45px;
    }
</style>
