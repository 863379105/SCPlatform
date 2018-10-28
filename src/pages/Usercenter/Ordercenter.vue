<template>
  <div class="sales-board">
      <div class="sales-board-form">
        <Table :columns="columns1" :data="data1"></Table>
      </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
        columns1: [
            {

                title: '订单编号',
                key: 'orderid',
                render: (h, params) => {
                            return h('div', [
                                h('Icon', {
                                    props: {
                                        type: 'person'
                                    }
                                }),
                                h('strong', params.row.name)
                            ]);
                        }
            },
            {
                title: '产品名称',
                key: 'name'
            },
            {
                title: '下单时间',
                key: 'ordertime'
            },
            {
              title:'单价',
              key:'unitprice'
            },
            {
              title:'数量',
              key:'num'
            },
            {
              title:'总价',
              key:'totalprice'
            },
            {
              title:'状态',
              key:'status'
            },
            {
              title:'操作',
              key:'opt',
              width: 150,
              align: 'center',
              render: (h, params) => {
                  return h('div', [
                      h('Button', {
                          props: {
                              type: 'primary',
                              size: 'small'
                          },
                          style: {
                              marginRight: '5px'
                          },
                          on: {
                              click: () => {
                                  this.pay(params.index)
                              }
                          }
                      }, '支付'),
                      h('Button', {
                          props: {
                              type: 'error',
                              size: 'small'
                          },
                          on: {
                              click: () => {
                                  this.remove(params.index)
                              }
                          }
                      }, '删除')
                  ]);
              }
            }
        ],
        data1: [
            {
                orderid: 'John Brown',
                unitprice: 18,
                name: 'New York No. 1 Lake Park',
                ordertime: '2016-10-03',
                num:10,
                totalprice:'180',
                status:'未付款',
                opt:'付款'
            },
            {
                orderid: 'Jim Green',
                unitprice: 24,
                name: 'London No. 1 Lake Park',
                ordertime: '2016-10-01',
                num:10,
                totalprice:'180',
                status:'未付款',
                opt:'付款'
            },
            {
                orderid: 'Joe Black',
                unitprice: 30,
                name: 'Sydney No. 1 Lake Park',
                ordertime: '2016-10-02',
                num:10,
                totalprice:'180',
                status:'未付款',
                opt:'付款'
            },
            {
                orderid: 'Jon Snow',
                unitprice: 26,
                name: 'Ottawa No. 2 Lake Park',
                ordertime: '2016-10-04',
                num:10,
                totalprice:'180',
                status:'未付款',
                opt:'付款'
            },
            {
                orderid: 'Jon Snow',
                unitprice: 26,
                name: 'Ottawa No. 2 Lake Park',
                ordertime: '2016-10-04',
                num:10,
                totalprice:'180',
                status:'未付款',
                opt:'付款'
            },
            {
                orderid: 'Jon Snow',
                unitprice: 26,
                name: 'Ottawa No. 2 Lake Park',
                ordertime: '2016-10-04',
                num:10,
                totalprice:'180',
                status:'未付款',
                opt:'付款'
            }
        ]
    }

  },
  methods: {
    pay (index) {
    },
    remove (index) {
      this.data1.splice(index, 1);
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
