<template>
<div>
  <h1>Notas Fiscais</h1>
  <p>Visualize as notas fiscais que você tem.</p>
  <table border="1px" cellpadding="5px" cellspacing="0">
    <thead>
      <tr>
        <th>NOTA FISCAL</th>
        <th>SACADO</th>
        <th>CEDENTE</th>
        <th>EMISSÃO</th>
        <th>VALOR</th>
        <th>STATUS</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in info" v-bind:key="item.id">
        <td>{{ item.orderNfId }}</td>
        <td>{{ item.buyer.name }}</td>
        <td>{{ item.provider.name }}</td>
        <td>{{ item.emissionDate }}</td>
        <td>{{ item.value }}</td>
        <td>{{ item.orderStatusBuyer }}</td>
      </tr>
    </tbody>
  </table>
</div>
</template>

<script>
import fetchData from '../services/data';

export default {
  data() {
    return {
      nome: 'Cristiano',
      array_de_nomes: ['Cristiano', 'José', 'Maria', 'João'],
      info: [],
    };
  },

  async mounted() {
    const { data } = await fetchData.list();
    this.info = data;
  },

  name: 'TableValue',
};
</script>

<style scoped>
table {
  border-collapse: collapse;
  width: 50em;
  border: 1px solid rgb(185, 185, 185);
}

thead {
  background: #ccc url(https://www.devfuria.com.br/html-css/tabelas/bar.gif) repeat-x left center;
  border-top: 1px solid #a5a5a5;
  border-bottom: 1px solid #a5a5a5;
}
tr:hover {
  background-color:#5f92da;
  color: black;
}
thead tr:hover {
  background-color: transparent;
  color: inherit;
}
tr:nth-child(even) {
    background-color: #edf5ff;
}
th {
  font-weight: normal;
  text-align: left;
}
th, td {
  padding: 0.1em 1em;
}

</style>
