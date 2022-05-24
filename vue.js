<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
</head>

<body>
    <div id="app">
        {{ message }}
    </div>


    <script>
        let app = new Vue({
            el: '#app',
            data: {
                message: 'Hello World!'
            }
        })
    </script>

    <!-- 양방향 바인딩 -->
    <div id="app-2">
        <input v-model="message">
        <div>
            {{ message }}
        </div>
    </div>

    <script>
        let app2 = new Vue({
            el: '#app-2',
            data: {
                message: ''
            }
        })
    </script>


    <!-- computed -->
    <div id="demo">
        <input v-model="message">
        <div>
            {{ fullName }}
        </div>
    </div>

    <script>
        let demo = new Vue({
            el: '#app',
            data: {
                message: 'Hello World!'
            }
        })
        var vm = new Vue({
            el: '#demo',
            data: {
                firstName: 'Foo',
                lastName: 'Bar',
                fullName: 'Foo Bar'
            },
            watch: {
                firstName: function (val) {
                    this.fullName = val + ' ' + this.lastName
                },
                lastName: function (val) {
                    this.fullName = this.firstName + ' ' + val
                }
            },
            created: function () {
                //생성자
                this.greeting();

                this.bye();
            },
            methods: {
                greeting: function () {
                    console.log('Hello!!');
                },
                bye: function() {
                    console.log('bye!!');
                }
            }
        })
    </script>
</body>

</html>
