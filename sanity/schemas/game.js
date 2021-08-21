import { BiBaseball as icon } from 'react-icons/bi';
import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'
dayjs.extend(utc)

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
      name: 'name',
      type: 'string',
    },
    {
      title: 'Date & Time',
      name: 'datetime',
      type: 'datetime',
      options: {
        dateFormat: 'YYYY-MM-DD',
        timeStep: 15,
      },
      validation: Rule => Rule.required()
    },
    {
      title: 'Away Team',
      name: 'away',
      type: 'array',
      of: [{ type: 'string' }],
      options: { 
        list: teams,
        layout: 'grid'
      },
      validation: Rule => Rule.max(1)
    },
    {
      title: 'Home Team',
      name: 'home',
      type: 'array',
      of: [{ type: 'string' }],
      options: { 
        list: teams,
        layout: 'grid'
      },
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
        ],
        layout: 'grid'
      },
      validation: Rule => Rule.max(1)
    },
  ], // fields
  preview: {
    select: {
      week: 'name',
      date: 'datetime',
      away: 'away.0',
      home: 'home.0',
    },
    prepare({ week, date, home, away }) {
      const datetime = dayjs.utc(date).local().format('MMMM D @ hmm')
      return {
        title: `${away || '???'} vs ${home || '???'}`,
        subtitle: `${datetime} : ${week}`,
      }
    }
  }, // preview
  orderings: [
    {
      title: 'Date',
      name: 'date_desc',
      by: [
        {field: 'datetime', direction: 'asc'},
      ]
    },
  ], // orderings
}
