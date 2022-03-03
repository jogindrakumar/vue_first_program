const vm = Vue.createApp({
    data() {
        return {
            firstName: 'jogindra',
            secondName: 'kumar'

        }
    },
    methods: {
        fullName() {
            return `${this.firstName} ${this.secondName.toUpperCase()}`
        }
    }


}).mount('#app')
setTimeout(() => {
    vm.firstName = 'monu',
        vm.secondName = 'singh'
}, 2000)

// Vue.createApp({
//     data() {
//         return {
//             secondName: 'kumar'

//         }
//     }


// }).mount('#appp')