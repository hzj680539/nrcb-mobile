const Index = resolve => require(['@/components/demaxiya/Index'], resolve)
const List = resolve => require(['@/components/demaxiya/List'], resolve)
const Detail = resolve => require(['@/components/demaxiya/Detail'], resolve)

const routes = {
  path: '/dema',
  component: Index,
  children: [
    {
      path: '',
      component: List
    },
    {
      path: 'detal',
      component: Detail
    }
  ]
}

export default routes
