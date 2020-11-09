import React, { useState, useEffect } from "react"
import { useDispatch, useSelector } from 'react-redux'
import { useHistory, useParams } from 'react-router-dom'

import MUIDataTable from 'mui-datatables'
import LinearProgress from '@material-ui/core/LinearProgress'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import Icon from '@material-ui/core/Icon';

import { makeStyles } from '@material-ui/core/styles'

import { getPosts, selectPosts } from '@store/postsTable'

const useStyles = makeStyles((theme) => ({
  img: {
    width: '40px',
    height: '40px',
    objectFit: 'cover',
    display: 'block'
  },
  cell: {
    '& :last-child': {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }
  }
}))

const state = [
  ["Gabby George", "Business Analyst", "Minneapolis", 30, "$100,000"],
  ["Aiden Lloyd", "Business Consultant", "Dallas",  55, "$200,000"],
  ["Jaden Collins", "Attorney", "Santa Ana", 27, "$500,000"],
  ["Franky Rees", "Business Analyst", "St. Petersburg", 22, "$50,000"],
  ["Aaren Rose", "Business Consultant", "Toledo", 28, "$75,000"],
  ["Blake Duncan", "Business Management Analyst", "San Diego", 65, "$94,000"],
  ["Frankie Parry", "Agency Legal Counsel", "Jacksonville", 71, "$210,000"],
  ["Lane Wilson", "Commercial Specialist", "Omaha", 19, "$65,000"],
  ["Robin Duncan", "Business Analyst", "Los Angeles", 20, "$77,000"],
  ["Mel Brooks", "Business Consultant", "Oklahoma City", 37, "$135,000"],
  ["Harper White", "Attorney", "Pittsburgh", 52, "$420,000"],
  ["Kris Humphrey", "Agency Legal Counsel", "Laredo", 30, "$150,000"],
  ["Frankie Long", "Industrial Analyst", "Austin", 31, "$170,000"],
  ["Brynn Robbins", "Business Analyst", "Norfolk", 22, "$90,000"],
  ["Justice Mann", "Business Consultant", "Chicago", 24, "$133,000"],
  ["Addison Navarro", "Business Management Analyst", "New York", 50, "$295,000"],
  ["Jesse Welch", "Agency Legal Counsel", "Seattle", 28, "$200,000"],
  ["Eli Mejia", "Commercial Specialist", "Long Beach", 65, "$400,000"],
  ["Gene Leblanc", "Industrial Analyst", "Hartford", 34, "$110,000"],
  ["Danny Leon", "Computer Scientist", "Newark", 60, "$220,000"],
  ["Lane Lee", "Corporate Counselor", "Cincinnati", 52, "$180,000"],
  ["Jesse Hall", "Business Analyst", "Baltimore", 44, "$99,000"],
  ["Danni Hudson", "Agency Legal Counsel", "Tampa", 37, "$90,000"],
  ["Terry Macdonald", "Commercial Specialist", "Miami", 39, "$140,000"],
  ["Justice Mccarthy", "Attorney", "Tucson", 26, "$330,000"],
  ["Silver Carey", "Computer Scientist", "Memphis", 47, "$250,000" ],
  ["Franky Miles", "Industrial Analyst", "Buffalo", 49, "$190,000"],
  ["Glen Nixon", "Corporate Counselor", "Arlington", 44, "$80,000"],
  ["Gabby Strickland", "Business Process Consultant", "Scottsdale", 26, "$45,000"],
  ["Mason Ray", "Computer Scientist", "San Francisco", 39, "$142,000"]
]

const PostsTable = () => {
  const classes = useStyles()
  const dispatch = useDispatch()
  const history = useHistory()
  const [data, setData] = useState(state)
  const posts = useSelector(selectPosts)
  const { isFetching, pagination } = useSelector(state => state.postsTable)
    
  const columns = [
      {
        name: "index",
        label: '#',
        options: {
          filter: false,
        }
      },
      {
        name: "img",
        label: 'Picture',
        options: {
          setCellHeaderProps: () => ({align: 'center'}),
          setCellProps: () => ({classes: {body: classes.cell}}),
          filter: false,
          sort: false,
          customBodyRender: (value) => {
            return (
              <img
                className={classes.img}
                src={value} alt=""
              />
            )
          }
        }
      },
      {
        name: "title",
        label: 'Title',
        options: {
          filter: true,
          sort: true
        }
      },
      {
        name: 'show',
        label: "Show to main page",
        options: {
          filter: true,
          // setCellHeaderProps: () => ({align: 'center'}),
          // setCellProps: () => ({classes: {body: classes.cell}}),
          customBodyRender: (value) => (
            value ? 
              <Icon>done</Icon> :
              <Icon>clear</Icon>
          )
        }
      },
      {
        name: "status",
        label: 'Status',
        options: {
          filter: false,
          customBodyRender: (value) => (
            <Button variant="outlined" disabled>
              {value}
            </Button>
            
          )
        }
      },
      {
        name: "created",
        label: 'Created',
        options: {
        }
      },
      {
        name: "Actions",
        options: {
          filter: true,
          sort: false,
          customBodyRender: (id) => {
            console.log({id})
            return (
              <div>
                <IconButton
                  onClick={() => history.push(`/blog/posts/edit/${id}`)}
                >
                  <Icon>edit</Icon>
                </IconButton>
                <IconButton><Icon>delete</Icon></IconButton>
              </div>
            )
          }
        }
      }
    ];

    const options = {
      align: 'center',
      filter: false,
      filterType: 'dropdown',
      responsive: 'vertical',
      search: false,
      selectableRows: false,
      onColumnSortChange: (changedColumn, direction) => console.log('changedColumn: ', changedColumn, 'direction: ', direction),
      onChangeRowsPerPage: numberOfRows => console.log('numberOfRows: ', numberOfRows),
      onChangePage: currentPage => console.log('currentPage: ', currentPage),
      setTableProps: () => ({size: 'small'}),
      textLabels: {
        body: {
            noMatch:
                'Sorry, there is no matching data to display',
        },
      },
    };

    useEffect(() => {
      dispatch(getPosts(1)).then(res => {
      })
    }, [])

    return (
      isFetching ? 
        <LinearProgress/> :
        <MUIDataTable title={"ACME Employee list"} data={posts} columns={columns} options={options} />
    );
}

export default PostsTable;
