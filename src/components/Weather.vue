<template>
    <div>
        <div class="card m-5">
            <div class="card-body">
                <h3>東京</h3>
                <div>今日の天気は{{tokyo.weather}}</div>
                <div>気温は{{tokyo.temp}}</div>
            </div>
        </div>
        <div class="card m-5">
            <div class="card-body">
                <h3>大阪</h3>
                <div>今日の天気は{{osaka.weather}}</div>
                <div>気温は{{osaka.temp}}</div>
            </div>
        </div>
        <button class="btn btn-primary" v-on:click="getData()">今日の天気をAPIで取得！</button>
    </div>
    
</template>
<script src="https://unpkg.com/axios/dist/axios.js"></script>
<script>
export default {
    name: 'Weather',
    data: function() {
        return {
            weather: '',
            temp: '',
            tokyo: {
                weather: '',
                temp: '',
            },
            osaka: {
                weather: '',
                temp: '',
            }
        }
    },
    methods: {
        getData: async function(){
            // 東京の天気
            const URL1 = `https://api.openweathermap.org/data/2.5/weather?id=1850147&units=metric&appid=b5be15b738087fe8fa8cf88985b4125b`;
            const response1 = await axios.get(URL1);
            this.tokyo.weather = response1.data.weather[0].main;
            this.tokyo.temp = response1.data.main.temp;
            // 大阪の天気
            const city = 'Osaka'
            const baseurl = 'https://api.openweathermap.org/data/2.5/weather' 
            const units = 'metric' // 温度の単位（摂氏）
            const api = 'b5be15b738087fe8fa8cf88985b4125b' // APIキー
            const URL2 = `${baseurl}?units=${units}&q=${city}&appid=${api}`;
            const response2 = await axios.get(URL2);
            this.osaka.weather = response2.data.weather[0].main;
            this.osaka.temp = response2.data.main.temp;
            // console.log(response.data);
            
        },
        getData2: async function(){
            // 大阪の天気
            const URL2 = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=Osaka&appid=b5be15b738087fe8fa8cf88985b4125b`;
            const response2 = await axios.get(URL2);
            this.osaka.weather = response2.data.weather[0].main;
            this.osaka.temp = response2.data.main.temp;
            console.log(response.data);
            return this.weather;
        },
        dataMaker(){
            return this.data = 'そうですね'
        }
    },
    // async mounted() {
    //     const URL = `https://api.openweathermap.org/data/2.5/weather?id=1850147&units=metric&appid=b5be15b738087fe8fa8cf88985b4125b`;
    //     const response = await axios.get(URL);
    //     this.weather = response.data.weather[0].main;
    //     this.temp = response.data.main.temp;
    //     console.log(JSON.stringify(response));      
    // }
}
</script>

