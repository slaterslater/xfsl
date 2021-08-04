import { BiBaseball as icon } from 'react-icons/bi';

const teams = [
  {title: 'Diamond Heist', value: 'Diamond Heist'},
  {title: 'GasVills', value: 'GasVills'},
  {title: 'LEMONHEADS', value: 'LEMONHEADS'},
  {title: 'TBW', value: 'TBW'},
]

export default {
  name: 'game',
  title: 'Games',
  type: 'document',
  icon,
  fields: [
    {
      title: 'Week',
      name: 'week',
      type: 'string',
    },
    {
      title: 'Date',
      name: 'date',
      type: 'date',
    },
    {
      title: 'Time',
      name: 'time',
      type: 'array',
      of: [{ type: 'number' }],
      options: {
        list: [
          {title: '630', value: 630},
          {title: '700', value: 700},
          {title: '830', value: 830},
          {title: '900', value: 900},
        ]
      },
      validation: Rule => Rule.max(1)
    },
    {
      title: 'Away',
      name: 'away',
      type: 'array',
      of: [{ type: 'string' }],
      options: { list: teams },
      validation: Rule => Rule.max(1)
    },
    {
      title: 'Home',
      name: 'home',
      type: 'array',
      of: [{ type: 'string' }],
      options: { list: teams },
      validation: Rule => Rule.max(1) 
    },
    {
      title: 'Winner',
      name: 'winner',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        list: [
          {title: 'Away', value: 'Away'},
          {title: 'Home', value: 'Home'},
          {title: 'Tie', value: 'Tie'},
          {title: 'Not Played', value: 'Not Played'},
        ]
      },
      validation: Rule => Rule.max(1)
    },
  ], // fields
  preview: {
    select: {
      week: 'week',
      date: 'date',
      time: 'time.0',
      away: 'away.0',
      home: 'home.0',
    },
    prepare({ week, date, time, home, away }) {
      const [year, month, day] = date.split('-')
      const month_name = () => {
        let date_obj = new Date()
        date_obj.setMonth(parseInt(month) - 1)
        return date_obj.toDateString().split(' ')[1]
      }
      return {
        title: `${away || '???'} vs ${home || '???'}`,
        subtitle: `${month_name()} ${parseInt(day)} @ ${time} : ${week}`,
      }
    }
  }, // preview
  orderings: [
    {
      title: 'Date',
      name: 'date_desc',
      by: [
        {field: 'date', direction: 'asc'},
      ]
    },
  ], // orderings
}
