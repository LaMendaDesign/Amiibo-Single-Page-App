

const header = Vue.component('mi-header', {
    template: `
            <div class="miheader">
                <img src="Logo_amiibo.png" alt="logo" class="logo">    
                <div class="menulinks">
                    <div><a href="#" @click="goAbout">About</a></div>
                    <div><a href="#" @click="goPrincipal">Find yours</a></div>
                    <div><a href="#" @click="goChat">Chat</a></div>
                </div>
            </div>

    `,
    data() {
        return {
            active: '',
        }
    },
    methods: {
        goPrincipal() {
            this.active = "principal";
            this.$emit('llevame', this.active);
        },
        goAbout() {
            this.active = "about";
            this.$emit('llevame', this.active);
        },
        goChat() {
            this.active = "chat";
            this.$emit('llevame', this.active);
        },
    },
});

Vue.component('buscador', {
    props: ['amiibos', 'series'],
    template: `
            <div class="separar-nav">
                
                <v-form class="margenes">
                    <v-container>
                        <v-layout>
                            <v-flex
                            xs12
                            md4
                            >
                                <v-text-field
                                    label="Word Search"
                                    required
                                    v-model="search">
                                </v-text-field>

                            </v-flex>

                        </v-layout>
                    </v-container>
                </v-form>
                
                <v-form >
                    <v-container>
                        <v-layout class="margenes dividir">
                            <div class="ancho-columna">
                                <v-select
                                v-model="selectedType"
                                :menu-props="{ maxHeight: '400' }"
                                :items="types"
                                label="Type"
                                multiple
                                >
                        
                                </v-select>
                            </div>
                            
                            <div xs12 sm6 class="ancho-columna">
                                <v-select
                                v-model="selectedSerie"
                                :menu-props="{ maxHeight: '400' }"
                                :items="series"
                                label="Game Series"
                                multiple
                                >
                                </v-select>
                            </div>
                        </v-layout>
                    </v-container>
                </v-form>


                <div class="contenedor">
                    <div class="tarjetita" v-for="amiibo in filteredAmiibos" @click="selectAmiibo(amiibo)"> 
                        <img :src="amiibo.image" alt="amiibo image" class="imgamiibo">
                        <div class="info-tarjetita">
                            <h3>{{ amiibo.character }}</h3>
                            <h4> {{ amiibo.gameSeries }} </h4>
                            <h4> {{ amiibo.amiiboSeries }} </h4>
                        </div>
                    </div>
                </div>
            </div>
    `,
    data() {
        return {
            seriess: this.series,
            selectedSerie: '',
            types: ['Yarn', 'Figure', 'Card'],
            selectedType: '',
            search: '',
            selectedAmiibo: [],
        }
    },
    methods: {
        selectAmiibo(x) {
            this.selectedAmiibo.push(x);
            this.$emit('amiibo', this.selectedAmiibo);
        },

    },
    computed: {
        filteredAmiibos() {
            return this.amiibos.filter(amiibo => {
                let filtro1 =
                    this.selectedSerie.includes(amiibo.gameSeries) ||
                    this.selectedSerie == "";
                let filtro2 =
                    this.selectedType == amiibo.type ||
                    this.selectedType == "";
                let filtro3 =
                    amiibo.gameSeries.includes(this.search) ||
                    amiibo.character.includes(this.search);
                console.log("1", filtro3)
                return filtro1 && filtro2 && filtro3;
            }).sort();
        },

    }
});

Vue.component('about-page', {
    template: `
                <div class="separar-nav">
                    <h1>What is this Amiibo's thing about?</h1>
                    <div class="secciones">
                        <ul>
                            <li><a href="#1-section" class="section-link">What do I need in order to play with amiibo?</a>
                            </li>
                            <li><a href="#2-section" class="section-link">What do amiibo do?</a></li>
                            <li><a href="#3-section" class="section-link">How many games can I save to a single amiibo at
                                    the same
                                    time?</a></li>
                            <li><a href="#4-section" class="section-link">Do all amiibo work with all compatible games?</a>
                            </li>
                            <li><a href="#5-section" class="section-link">Where can I find out which games an amiibo is
                                    compatible
                                    with?</a></li>
                            <li><a href="#6-section" class="section-link">Can I play as my amiibo figure as a character in
                                    the
                                    games?</a></li>
                            <li><a href="#7-section" class="section-link">If I already have game data saved on my amiibo,
                                    can I
                                    still use
                                    that amiibo in other compatible
                                    games?</a></li>
                            <li><a href="#8-section" class="section-link">How do I set up my amiibo figure with Super Smash
                                    Bros.
                                    for Wii
                                    U?</a></li>
                            <li><a href="#9-section" class="section-link">What does it mean if an amiibo is Read-only or
                                    Read/Write
                                    compatible?</a></li>
                            <li><a href="#10-section" class="section-link">Can you play amiibo-compatible games without
                                    using
                                    amiibo?</a>
                            </li>
                        </ul>
                    </div>
                    <div class="secciones">
                        <div>
                            <p class="resaltado">Amiibo is Nintendo's toys-to-life
                                platform. It consists of a wireless communications and storage protocol, for connecting
                                toys
                                to the Wii U, Nintendo 3DS, and Nintendo Switch video game consoles.</p>
                        </div>
                        <div class="amiibo-image">

                        </div>
                    </div>

                    <div class="secciones">
                        <h3 id="1-section">What do I need in order to play with amiibo?</h3>
                        <p class="first-p">You will need an amiibo figure or card, a compatible game, and a Nintendo Switch, Wii U,
                            or New Nintendo 3DS XL system.</p>
                        <p>
                            For use with Nintendo 3DS, Nintendo 3DS XL and Nintendo 2DS systems, a Nintendo 3DS NFC
                            Reader/Writer accessory is required. (Sold separately).</p>
                    </div>


                    <div class="secciones">
                        <h3 id="2-section">What do Amiibo do?</h3>
                        <p class="first-p">Specific features depend on the amiibo and the compatible game.</p>
                            <p>
                            In general, some games can save game data to an amiibo. Other games will give you bonus
                            content just for tapping an amiibo to your game system’s NFC reader.
                            <br>
                            For full details, check out the compatibility chart.</p>
                    </div>

                    <div class="secciones">
                        <h3 id="3-section">How many games can I save to a single amiibo at the same time?</h3>
                        <p class="first-p">An amiibo can save data for one game at a time. This means that game data will need to be
                            deleted on an amiibo before it can be used with another game with read/write
                            compatibility
                        </p>
                    </div>

                    <div class="secciones">
                        <h3 id="4-section">Do all amiibo work with all compatible games?</h3>
                        <p class="first-p">Compatibility and functionality of amiibo may vary by game.</p>
                        <p>
                            Find out which amiibo are compatible by game with the compatibility chart.
                        </p>
                    </div>

                    <div class="secciones">
                        <h3 id="5-section">Where can I find out which games an amiibo is compatible with?</h3>
                        <p class="first-p">Compatibility information is listed in several places, including this handy compatibility
                            chart.</p>
                        <p>
                            You can also check out the lineup here, then click on an amiibo figure for a description
                            that includes a full list of compatible titles.</p>
                        <p>
                            And, you may also search for amiibo figures by compatible game.
                        </p>
                    </div>

                    <div class="secciones">
                        <h3 id="6-section">Can I play as my amiibo figure as a character in the games?</h3>
                        <p class="first-p">                                
                            Some titles allow you to play as your amiibo character. For example, in Super Smash
                            Bros. for Wii U, you can battle, train, and level up your amiibo character.</p>
                        <p>
                            For full details, please check out the compatible games.
                        </p>
                    </div>

                    <div class="secciones">
                        <h3 id="7-section">If I already have game data saved on my amiibo, can I still use that amiibo
                            in other compatible games?</h3>
                        <p class="first-p">Yes, you can still use your amiibo to get bonus items in games like Mario Kart 8 and
                            Hyrule Warriors. However, for other games that save data to your amiibo (such as Mario
                            Party 10), you will need to delete any existing save data on the amiibo before using it
                            with a new read/write compatible game.
                        </p>
                    </div>

                    <div class="secciones">
                        <h3 id="8-section">How do I set up my amiibo figure with Super Smash Bros. for Wii U?</h3>
                        <iframe  class="video-set-up-amiibo" type="video/mp4" src="https://www.youtube.com/embed/fpmOaXMtz3U" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
                        </iframe>

                        <ol>
                            <li>Start up the game. Select "Games and More" in the main menu, then select "amiibo."
                            </li>
                            <li>Tap your amiibo to the NFC touchpoint found on the lower-left corner of the Wii U
                                GamePad controller, assign it to an owner, select an outfit and give it a nickname.
                            </li>
                            <li>Press Start (+ button) to confirm, then tap your amiibo to the GamePad again to
                                save.</li>
                            <li>Select "Smash" mode from the main menu, then on the character select screen, tap the
                                GamePad to send your amiibo into battle.</li>
                            <p>Remember, when your amiibo is done battling, tap it in again to save your amiibo
                                figure's progress.</p>
                        </ol>
                    </div>

                    <div class="secciones">
                        <h3 id="9-section">What does it mean if an amiibo is Read-only or Read/Write compatible?</h3>
                        <p class="first-p">An amiibo-compatible game can have either Read-only or Read/Write compatibility with an
                            amiibo.</p>
                        <p>
                            Read-only compatible means that you can tap an amiibo to the system’s NFC reader to get
                            additional content. For example, the Mario amiibo figure will give you a special racing
                            suit for your Mii™ character when used with the Mario Kart 8 game.</p>
                        </p>
                            Read/Write compatible, on the other hand, means that you can get additional content AND
                            save certain game data to the amiibo. For example, you can customize your character and
                            then save it to your Mario amiibo in Super Smash Bros. for Wii U. One amiibo can hold
                            save data for one game at a time.</p>
                        <p>
                            You can use an amiibo with save data on it in Read-only compatible games. That means
                            you'll still get the additional content without having to use a different amiibo!</p>
                    </div>

                    <div class="secciones">
                        <h3 id="10-section">Can you play amiibo-compatible games without using amiibo?</h3>
                        <p class="first-p">You can enjoy the full game experience with all games compatible with amiibo without
                            using an amiibo figure. Using an amiibo will simply add new, optional elements to the
                            gameplay (depending on the game).</p>
                    </div>
                </div>

    `,
    data() {
        return {
        }
    },
    methods: {
    },
});

Vue.component('amiibo-page', {
    props: ['esteamiibo'],
    template: `
                <div class="separar-nav selected-amiibo-page">
                    <div class="alinear-texto-izquierda">
                        <p>< Back</p>
                    </div>
                    
                    <div>
                        <img :src="esteamiibo[0].image" alt="amiibo image" class="amiibo-page-image">
                    </div>

                    

                    <div class="info-amiibo">
                        <h2>{{esteamiibo[0].character}}</h2>
                        <div class="row"> 
                            <div class="column"> 
                                <h6>Amiibo Series</h6>
                                <p>{{esteamiibo[0].amiiboSeries}}</p>
                            </div>
                            <div class="column"> 
                                <h6>Game Series</h6>
                                <p>{{esteamiibo[0].gameSeries}}</p>
                            </div>
                        </div>

                        <div class="row"> 
                            <div class="column">
                                <h6>Type</h6>
                                <p>{{esteamiibo[0].type}}</p> 
                            </div>
                            <div class="column">
                                <h6>Europe Release</h6>
                                <p>{{esteamiibo[0].release.eu}}</p> 
                            </div>                    
                        </div>

                        <div class="row"> 
                            <div class="column"> 
                                <h6>Head</h6>
                                <p>{{esteamiibo[0].head}}</p> 
                            </div>
                            <div class="column"> 
                                <h6>Tail</h6>
                                <p>{{esteamiibo[0].tail}}</p> 
                            </div>                    
                        </div>
                    </div>


                </div>

    `,
    data() {
        return {

        }
    },

});


Vue.component('chat', {
    template: `
    <div class="chat">
        <button id="login" class="button is-info">Login</button>

        <div id="posts" class="box" v-chat-scroll="{always: false, smooth: true, scrollonremoved:true}">
        Loading posts...
        </div>

        <div class="inputs">
            <input id="textInput" class="input" type="text" placeholder="Your message..." />

            <button id="create-post" class="button is-primary">Send</button>
        </div>
    </div>
                

    `,
    data() {
        return {

        }
    },
    methods: {

    },

});




const vm = new Vue({
    el: '#App',
    components: { "mi-header": header },
    mounted() {
        this.cargaAmiibos();
    },
    data: {
        todosAmiibos: [],
        paginaActual: 1,
        amiibosPorPagina: 50,
        page: '',
        esteAmiiboObjeto: [],
    },
    methods: {
        cargaAmiibos() {
            axios.get('https://www.amiiboapi.com/api/amiibo/')
                .then((response) => {
                    this.todosAmiibos = response.data.amiibo;
                });
        },
        cambiarPagina(x) {
            this.paginaActual = x;
        },
        // x es la variable "data" en el componente de mi-header
        hazNav(x) {
            this.page = x;
        },
        paginaAmiibo(x) {
            this.esteAmiiboObjeto = x;
            this.page = 'detalle';
        },
        enter() {
            this.page = 'principal';
        }
    },
    computed: {
        // son funciones que podemos interpolar en el html como si se tratara de variables (cosas dentro de data, en este caso)
        // Calculan el valor antes de mostrarlo en la vista html
        gameSeries() {
            return [...new Set(this.todosAmiibos.map(amiibo => amiibo.gameSeries))].sort();
        },
        primerAmiibo() {
            return (this.paginaActual - 1) * this.amiibosPorPagina;
        },
        ultimoAmiibo() {
            return (this.primerAmiibo + this.amiibosPorPagina);
        },
        amiibosMostrar() {
            return this.todosAmiibos.slice(this.primerAmiibo, this.ultimoAmiibo);
        },
        numeroPaginas() {
            // Math.ceil es para redondear al numero mayor cuando hay decimales. 
            //Si salen 4,3 paginas significa que tenemos 4 paginas y nos sobran amiibos, asi que los colocamos en una pagina 5
            return Math.ceil(this.todosAmiibos.length / this.amiibosPorPagina);
        }
    }
});

// CHAT

document.getElementById("login").addEventListener("click", login);
document.getElementById("create-post").addEventListener("click", writeNewPost);

getPosts();

function login() {
    // https://firebase.google.com/docs/auth/web/google-signin

    //Provider
    var provider = new firebase.auth.GoogleAuthProvider();

    //How to signin
    firebase.auth().signInWithPopup(provider);

    console.log("login");
}

function writeNewPost() {
    // https://firebase.google.com/docs/database/web/read-and-write

    //Values from HTML
    var text = document.getElementById("textInput").value;
    var name = firebase.auth().currentUser.displayName;

    var objectToSend = {
        message: text,
        author: name,
    };

    let padre = {};
    let fecha = new Date();

    padre[fecha] = objectToSend;

    // en vez de push, update
    firebase
        .database()
        .ref("basededatos")
        .update(padre);

    // firebase.database().ref("test").push(objectToSend);

    console.log('send');

    // Values

}

function getPosts() {
    //Get messages

    firebase
        .database()
        .ref('basededatos')
        // cuando llega algo a la base de datos ejecutamos...
        .on('value', function (data) {
            console.log(data.val());
            var posts = document.getElementById("posts");
            posts.innerHTML = "";
            console.log(data.val());
            var messages = data.val();

            for (var key in messages) {
                var text = document.createElement("div");
                text.className += "grupoMensajito";


                var element = messages[key];

                var autor = document.createElement('div');
                autor.className += "autor-nombre"
                var nombreAutor = document.createTextNode(element.author);
                autor.appendChild(nombreAutor);

                var mensajito = document.createElement('div');
                mensajito.className += "mensajito-texto";
                var elMensaje = document.createTextNode(element.message);
                mensajito.appendChild(elMensaje);
                // var element.author = document.createElement('div)');
                // var element.message = document.createElement('div)');

                // text.append(element.author);
                text.append(autor);
                text.append(mensajito);

                posts.append(text);
            }
        })

    console.log("getting posts");
}

