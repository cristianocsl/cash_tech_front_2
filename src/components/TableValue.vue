<template>
  <div class="q-pa-md">
    <div class="row">
      <div class="col-2">
        <img
          src="../../public/icons/NicePng_dinheiro-png_3289743.png"
          style="width: 80%; max-width: 80px; min-width: 40px;"
          alt="Dinheiro - Dinheiro Logo Png@nicepng.com"
        />
        <h5>
          Cash Tech - Solutions
        </h5>
      </div>
      <div class="col-10">
        <div class="row">
          <h4>Notas Fiscais</h4>
        </div>
        <div class="row">
          <p>Visualize as notas fiscais que você tem.</p>
        </div>
        <q-table
          title=""
          :rows="newRows"
          :columns="newColumns"
        ></q-table>
      </div>
    </div>
  </div>
</template>

<script>

const HEAD = ['NOTA FISCAL', 'SACADO', 'CEDENTE', 'EMISSÃO', 'VALOR', 'STATUS'];
const FIELD = ['nota_fiscal', 'sacado', 'cedente', 'emissao', 'valor', 'status'];

import fetchData from '../services/data';

export default {
  methods: {
    getRows(data) {
      const newArray = [];
      data.forEach((item) => {
        newArray.push(
          {
            nota_fiscal: item.orderNfId,
            sacado: item.buyer.name,
            cedente: item.provider.name,
            emissao: item.emissionDate,
            valor: item.value,
            status: item.orderStatusBuyer,
          },
        );
      });

      return newArray;
    },
    putSortable(columns) {
      const sortableItems = [];
      columns.forEach((item) => {
        if (item.name === 'emissao') {
          sortableItems.push({
            ...item,
            sortable: true,
            sort: (a, b) => parseInt(a, 10) - parseInt(b, 10),
          });
        } else {
          sortableItems.push(item);
        }
      });

      return sortableItems;
    },
    getColumns() {
      const arrayColumns = [];
      FIELD.forEach((item, index) => {
        arrayColumns.push({
          name: item,
          label: HEAD[index],
          field: item,
        });
      });

      arrayColumns[0] = {
        field: (row) => row.nota_fiscal,
        name: 'name',
        label: 'NOTA FISCAL',
      };

      return this.putSortable(arrayColumns);
    },
  },

  data() {
    return {
      info: [],
      newRows: [],
      newColumns: [],
    };
  },

  async mounted() {
    const { data } = await fetchData.list();
    this.info = data;
    this.newRows = this.getRows(data);
    this.newColumns = this.getColumns();
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

.row > div {
  padding: 10px 15px;
  background: rgba(86,61,124,.15);
  border: 1px solid rgba(86,61,124,.2);
}
.row + .row {
  margin-top: 1rem;
}

</style>
