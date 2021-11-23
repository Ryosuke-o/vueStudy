<template>
    <div>
        <div>Weather App</div>
        <div> {{ message }} </div>
        <div>今日はの天気は{{ this.weather }}です。</div>
        <button v-on:click="getData()">今日の東京の天気をAPIで取得！</button>
    </div>
    
</template>
<script src="https://unpkg.com/axios/dist/axios.js"></script>
<script>
export default {
    name: 'Weather',
    data: function() {
        return {
            message: '今日は良い天気ですね',
            data: '',
            weather: '',
            temp: '',
        }
    },
    methods: {
        getData: async function(){
            const URL = `https://api.openweathermap.org/data/2.5/weather?id=1850147&units=metric&appid=b5be15b738087fe8fa8cf88985b4125b`;
            const response = await axios.get(URL);
            this.weather = response.data.weather[0].main;
            this.temp = response.data.main.temp;
            console.log(response.data);
            return this.weather;
        },
        dataMaker(){
            return this.data = 'そうですね'
        }
    },
    async mounted() {
        const URL = `https://api.openweathermap.org/data/2.5/weather?id=1850147&units=metric&appid=b5be15b738087fe8fa8cf88985b4125b`;
        const response = await axios.get(URL);
        this.weather = response.data.weather[0].main;
        this.temp = response.data.main.temp;
        console.log(JSON.stringify(response));
        
    }
}
</script>

