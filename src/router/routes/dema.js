import Index from '@/components/Index'

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
