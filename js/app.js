dayjs.extend(window.dayjs_plugin_customParseFormat);

/**********************************
   array dei contatti
*********************************/
const contacts = [
    {
        name: 'Michela',
        avatar: 'https://i.pravatar.cc/50?img=1',
        visible: true,
        messages: [
            {
                date: '10/01/2020 15:30:55',
                message: 'Hai portato a spasso il cane?',
                status: 'sent'
            },
            {
                date: '10/01/2020 15:50:00',
                message: 'Ricordati di stendere i panni',
                status: 'sent'
            },
            {
                date: '10/01/2020 16:15:22',
                message: 'Tutto fatto!',
                status: 'received'
            }
        ],
    },
    {
        name: 'Fabio',
        avatar: 'https://i.pravatar.cc/50?img=2',
        visible: true,
        messages: [
            {
                date: '20/03/2020 16:30:00',
                message: 'Ciao come stai?',
                status: 'sent'
            },
            {
                date: '20/03/2020 16:30:55',
                message: 'Bene grazie! Stasera ci vediamo?',
                status: 'received'
            },
            {
                date: '20/03/2020 16:35:00',
                message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                status: 'sent'
            }
        ],
    },
    {
        name: 'Samuele',
        avatar: 'https://i.pravatar.cc/50?img=3',
        visible: true,
        messages: [
            {
                date: '28/03/2020 10:10:40',
                message: 'La Marianna va in campagna',
                status: 'received'
            },
            {
                date: '28/03/2020 10:20:10',
                message: 'Sicuro di non aver sbagliato chat?',
                status: 'sent'
            },
            {
                date: '28/03/2020 16:15:22',
                message: 'Ah scusa!',
                status: 'received'
            }
        ],
    },
    {
        name: 'Alessandro B.',
        avatar: 'https://i.pravatar.cc/50?img=4',
        visible: true,
        messages: [
            {
                date: '10/01/2020 15:30:55',
                message: 'Lo sai che ha aperto una nuova pizzeria?',
                status: 'sent'
            },
            {
                date: '10/01/2020 15:50:00',
                message: 'Si, ma preferirei andare al cinema',
                status: 'received'
            }
        ],
    },
    {
        name: 'Alessandro L.',
        avatar: 'https://i.pravatar.cc/50?img=5',
        visible: true,
        messages: [
            {
                date: '10/01/2020 15:30:55',
                message: 'Ricordati di chiamare la nonna',
                status: 'sent'
            },
            {
                date: '10/01/2020 15:50:00',
                message: 'Va bene, stasera la sento',
                status: 'received'
            }
        ],
    },
    {
        name: 'Claudia',
        avatar: 'https://i.pravatar.cc/50?img=6',
        visible: true,
        messages: [
            {
                date: '10/01/2020 15:30:55',
                message: 'Ciao Claudia, hai novità?',
                status: 'sent'
            },
            {
                date: '10/01/2020 15:50:00',
                message: 'Non ancora',
                status: 'received'
            },
            {
                date: '10/01/2020 15:51:00',
                message: 'Nessuna nuova, buona nuova',
                status: 'sent'
            }
        ],
    },
    {
        name: 'Federico',
        avatar: 'https://i.pravatar.cc/50?img=7',
        visible: true,
        messages: [
            {
                date: '10/01/2020 15:30:55',
                message: 'Fai gli auguri a Martina che è il suo compleanno!',
                status: 'sent'
            },
            {
                date: '10/01/2020 15:50:00',
                message: 'Grazie per avermelo ricordato, le scrivo subito!',
                status: 'received'
            }
        ],
    },
    {
        name: 'Davide',
        avatar: 'https://i.pravatar.cc/50?img=8',
        visible: true,
        messages: [
            {
                date: '10/01/2020 15:30:55',
                message: 'Ciao, andiamo a mangiare la pizza stasera?',
                status: 'received'
            },
            {
                date: '10/01/2020 15:50:00',
                message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                status: 'sent'
            },
            {
                date: '10/01/2020 15:51:00',
                message: 'OK!!',
                status: 'received'
            }
        ],
    },
];

/**********************************
   array delle risposte casuali
*********************************/
const answers = [
    'Non ci sono più le mezze stagioni',
    'Oggi ci sei, domani chissà',
    'Il tempo vola',
    'I giovani d’oggi non hanno più rispetto per gli anziani',
    'La verdura di una volta aveva tutto un altro sapore',
    'Sono sempre i migliori che se ne vanno',
    'Non c’è più rispetto per gli anziani',
    'È tutto un magna-magna',
    'Una volta i cibi erano più sani',
    'A tutto c’è rimedio, tranne che alla morte',
    'Non si finisce mai di imparare',
    'Non ti regala niente nessuno',
    'Auguri e figli maschi',
    'Ormai si passa direttamente dal cappotto alle mezze maniche',
    'Non esistono solo il bianco e il nero, ma ci sono tante sfumature di grigio',
    'Qui una volta era tutta campagna',
    'Al cuor non si comanda',
    'Nella vita non si può mai sapere',
    'Quando c’è la salute, c’è tutto',
    'È la vita',
    'I supermercati hanno ucciso il piccolo commercio',
    'D’estate nelle case antiche si sta più freschi',
    'I soldi non sono tutto nella vita',
    'Non c’è due senza tre',
    'Prova a buttare una carta per terra in Svizzera',
    'Ai tempi nostri ci si divertiva con poco',
    'Ai posteri l’ardua sentenza',
    'Se non ti ama non ti merita',
    'Una volta si poteva lasciare la porta aperta',
    'Con questo tempo non si sa più come vestirsi',
    'Non è tanto il caldo quanto l’umidità',
    'I film più belli li danno sempre e solo la notte',
    'Il mattone è sempre un buon investimento',
    'Come si mangia in Italia, non si mangia da nessuna parte',
    'Qui casca l’asino',
]

const app = new Vue({
    el: '#app',
    /**********************************
        DATA
     *********************************/
    data: {
        smartphoneChat: false,
        active: null,
        contacts,
        newMessage: '',
        search: true,
        text: '',
        addingContact: false,
        newAvatar: '',
        showMsg: -1,
        showInfo: false,
        writing: false,
        write: 'Online',
        answers
    },
    /**********************************
        COMPUTED
     *********************************/
    computed: {
        /**********************************
            ritorna l'array dei messaggi 
            della chat attivo
        *********************************/
        getMessages() {
            this.smartphoneChat = true;
            return this.contacts[this.active].messages;
        },
        /**********************************
            ritorna l'array dei messaggi
            contenente l'input text
        *********************************/
        getContactsFiltered() {
            if (!this.text) return contacts
            const contactFiltered = this.contacts.filter((el) => {
                const name = el.name.toUpperCase();
                const text = this.text.toUpperCase();
                return name.includes(text);
            })
            console.log(contactFiltered);
            return contactFiltered;
        }
    },
    /**********************************
        METHODS
     *********************************/
    methods: {
        /**********************************
            ritorna l'ora come stringa
            'HH:mm' dell'ultimo messaggio
        *********************************/
        getHour(messages) {
            const last = messages.length - 1;
            if (last < 0) return;
            let date = messages[messages.length - 1].date;
            return this.formatHour(date);
        },

        /**********************************
            prende una data e ritorna 
            l'ora come stringa 'HH:mm'
        *********************************/
        formatHour(date) {
            return dayjs(date, 'DD/MM/YYYY HH:mm:ss').format('HH:mm');
        },

        /**********************************
            imposta l'indice della chat
            attiva
        *********************************/
        moveActive(index) {
            this.active = index;
        },

        /**********************************
            aggiunge il messaggio inviato
            alla chat e genera una risposta
        *********************************/
        addMessage() {
            this.newMessage = this.newMessage.trim();
            if (!this.newMessage || this.active === null) return

            this.contacts[this.active].messages.push({
                date: dayjs().format('DD/MM/YYYY HH:mm:ss'),
                message: this.newMessage,
                status: 'sent'
            });

            this.writing = true;
            setTimeout(() => {
                this.write = 'Sta scrivendo...';
                setTimeout(() => {
                    this.contacts[this.active].messages.push({
                        date: dayjs().format('DD/MM/YYYY HH:mm:ss'),
                        message: this.randomMsg(),
                        status: 'received'
                    }
                    );
                    this.write = 'Online';
                    this.writing = false;
                }, 2000);
            }, 3000)


            this.newMessage = ''
        },

        /**********************************
            dato un indice i ritorna 
            l'ultimo messaggio del contatto
            in posizione i
        *********************************/
        getLastMsg(i) {
            const last = this.contacts[i].messages.length - 1;
            if (last < 0) return;
            return this.contacts[i].messages[last].message;
        },

        /**********************************
            resetta la variabile search
        *********************************/
        resetInput() {
            this.search = false;
        },

        /**********************************
            se search non era attivo
            lo attiva e resetta il testo
            altrimenti passa il focus
            sull'input text
        *********************************/
        controlSearch() {
            if (!this.search) {
                this.search = true;
                this.text = '';
            }
            else {
                this.$refs.typeBox.focus();
            }
        },

        /**********************************
            controlla che l'input text
            sia vuoto e attiva search
            con un ritardo di 200ms
            altrimenti causerebbe un bug
        *********************************/
        controlInput() {
            setTimeout(() => {
                if (this.text === '') this.search = true;
            }, 200)
        },

        /**********************************
            aggiunge un nuovo contatto ai
            messaggi
        *********************************/
        addContact() {
            const newContact = new Object;
            if (this.text === '') alert('Nome mancante')
            else {
                newContact.name = this.text;
                if (this.newAvatar === '') alert('Avatar assente')
                else {
                    newContact.avatar = this.newAvatar;
                    newContact.messages = new Array;
                    this.contacts.push(newContact);
                }
            }
            this.addingContact = false;
        },

        /**********************************
            al click sulla spunta del
            messaggio SE il messaggio sele-
            zionato come da mostrare è lo
            stesso che sto analizzando
            chiudo il layover
            ALTRIMENTI SE
            ho cliccato con uno diverso
            nascondo il layover
            in ogni caso imposto come
            messaggio da visualizzare quello
            che ho cliccato
        *********************************/
        changeShow(i) {
            if (this.showMsg === i) {
                this.showMsg = -1;
            }
            else {
                if (this.showMsg !== i) this.showInfo = false;
                this.showMsg = i;
            }
        },

        /**********************************
            nascondo/mostro il layout
            e imposto il messaggio da
            mostrare all'indice i passato
            come parametro
        *********************************/
        invertInfo(i) {
            this.showMsg = i;
            this.showInfo = !this.showInfo;
        },

        /**********************************
            funzione che dato un indice i
            elimina il messaggio in
            posizione i dalla chat attiva
        *********************************/
        deleteMsg(i) {
            this.getMessages.splice(i, 1)
            this.showMsg = -1;
            this.msg = '';
            this.editingMsg = false;
        },

        /**********************************
            ritorna una stringa contenente
            l'ultimo accesso del contatto
            della chat attiva
        *********************************/
        getLastAcc() {
            const contact = this.getMessages;
            const lastMsg = contact.length - 1;
            const string = contact[lastMsg].date.split(' ');
            return 'il ' + string[0] + ' alle ' + string[1];
        },

        /**********************************
            ritorna una stringa contenente
            una risposta casuale
        *********************************/
        randomMsg() {
            const length = this.answers.length;
            const random = Math.floor(Math.random() * length);
            return this.answers[random];
        },

        /**********************************
            ritorna una stringa contenente
            il link all'avatar del contatto
            della chat attiva
        *********************************/
        getAvatar() {
            return this.contacts[this.active].avatar;
        },

        /**********************************
            ritorna una stringa contenente
            il nome del contatto
            della chat attiva
        *********************************/
        getName() {
            return this.contacts[this.active].name;
        }
    }
})