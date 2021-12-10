<template>
  <div style='margin-bottom: 10px'>

    <b-row>
      <h1>How to fetch data from WEB API in Vue.js Application</h1>
    </b-row>
    <b-row>
      <b-col>
        <p>The vessel list</p>
        <b-table striped hover :items="claims"  @row-clicked="onRowClicked">
        </b-table>
      </b-col>

      <b-col>
        The vessel data
          <div class="panel-body">
            <vue-form-generator :schema="schema" :model="claim" :options="formOptions">
            </vue-form-generator>
          </div>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import ClaimService from '../ClaimService'
export default {
  name: 'Claimlist',
  data () {
    return {
      claims: [],
      schema: {
        fields: [
          {
            type: 'input',
            inputType: 'text',
            label: 'id',
            model: 'id',
            readonly: true,
            required: true
          },
          {
            type: 'input',
            inputType: 'text',
            label: 'Vessel',
            model: 'vessel',
            featured: 'true',
            required: 'true'
          },
          {
            type: 'input',
            inputType: 'text',
            label: 'Quantity',
            model: 'qty',
            featured: 'true',
            required: 'true'
          },
          {
            type: 'input',
            inputType: 'text',
            label: 'Cargo',
            model: 'cargo',
            featured: 'true',
            required: 'true'
          },
          {
            type: 'input',
            inputType: 'text',
            label: 'Stage',
            model: 'stage.name',
            featured: 'true',
            readonly: true
          },
          {
            type: 'input',
            inputType: 'text',
            label: 'Next Stages',
            model: 'stage.nextList',
            featured: 'true',
            readonly: true
          }
        ]
      },
      formOptions: {
        validateAfterLoad: true,
        validateAfterChanged: true,
        validateAsync: true
      },
      claim: {}
    }
  },
  created () {
    this.retrieveclaims()
  },
  methods: {
    onRowClicked (item) {
      ClaimService.getClaim(item.id)
        .then((response) => {
          this.claim = response.data
          console.log('I retrieved a claim: ' + this.claim.id)
        })
        .catch((e) => {
          console.log(e)
        })
    },
    retrieveclaims () {
      ClaimService.getAll()
        .then((response) => {
          this.claims = response.data
          console.log('Successfully got claims')
        })
        .catch((e) => {
          console.log(e)
        })
    }
  }
}
</script>
<style lang='scss' scoped>
</style>
