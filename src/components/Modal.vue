<template>
    <div>
        <b-btn v-b-modal.modal1>Launch demo modal</b-btn>
        <!-- Main UI -->
        <div class="mt-3 mb-3">
            Submitted Names:
            <ul>
                <li v-for="n in names">{{n}}</li>
            </ul>
        </div>
        <!-- Modal Component -->
        <b-modal id="modal1"
                 ref="modal1"
                 title="Submit your name"
                 @ok="handleOk"
                 @shown="clearName">
            <form @submit.stop.prevent="handleSubmit">
                <b-form-input type="text"
                              placeholder="Enter your name"
                              v-model="name"></b-form-input>
            </form>
        </b-modal>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                name: '',
                names: []
            }
        },
        methods: {
            clearName() {
                this.name = '';
            },
            handleOk(e) {
                e.cancel();
                if (!this.name) {
                    alert('Please enter your name');
                } else {
                    this.handleSubmit()
                }
            },
            handleSubmit() {
                this.names.push(this.name);
                this.clearName();
                this.$refs.modal1.hide()
            }
        }
    }
</script>
