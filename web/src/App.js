import { Button, Grid, IconButton, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField } from '@material-ui/core';
import { Add, Clear, Delete, Remove } from '@material-ui/icons';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { connect, useDispatch } from 'react-redux';
import './App.css';
import { addBird, decrementBird, incrementsBird, removeBird } from './store/birds/birds';
import { addBook, decrementBook, deleteBook, incrementsBook, setBook } from './store/books/books';
function App(props)
{
  const dispatch = useDispatch();
  const [birdName, setBirdName] = useState('')

  const [id, setId] = useState('')
  const [name, setName] = useState('')
  const [author, setAuthor] = useState('')
  const [count, setCount] = useState(1)
  // const  = useSelector(state => state.).sort((a, b) => { return a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1 });

  const handleClick = (e) =>
  {
    e.preventDefault();
    if (!birdName) {
      return
    }
    dispatch(addBird(birdName));
    setBirdName('');
  }

  const handleBookClick = (e) =>
  {
    e.preventDefault()
    if (!id || !name || !author) {
      return
    }
    dispatch(addBook({ id, name, author, count }))
  }

  useEffect(() =>
  {
    const fetchBooks = async () =>
    {
      const res = await axios.get('http://localhost:1992/books');
      dispatch(setBook(res.data.data))
    };
    fetchBooks();
  }, [])


  return (
    <div >

      <div className="wrapper">
        <Grid container spacing={3}>
          <Grid item xs={12} sm={4}>
            <h1>Bird List</h1>
            <div>
              <form>
                <TextField label="Add Bird" onChange={(e) => setBirdName(e.target.value)} value={birdName} />&nbsp;

                <div>
                  <Button variant="contained" color="primary" onClick={(e) => handleClick(e)}>
                    <Add />
                  </Button>

                </div>
              </form>
            </div>
            <ul>
              {props.birds.map(bird => (
                <li key={bird.name}>
                  <div style={{ display: 'flex' }}>
                    <h3>{bird.name}</h3>
                    <IconButton color="primary" onClick={() => dispatch(removeBird(bird.name))}>
                      <Clear />
                    </IconButton>
                  </div>
                  <div>
                    Views: {bird.views}&nbsp;
                    <IconButton color="primary" onClick={() => dispatch(incrementsBird(bird.name))}>
                      <Add />
                    </IconButton>
                    <IconButton color="primary" onClick={() => dispatch(decrementBird(bird.name))}>
                      <Remove />
                    </IconButton>
                  </div>
                </li>
              ))}
            </ul>
          </Grid>
          <Grid item xs={12} sm={4}>
            <h1>Book List</h1>
            <div>
              <form>
                <TextField type="number" label="Id" onChange={(e) => setId(e.target.value)} value={id} />&nbsp;
                <TextField label="Name" onChange={(e) => setName(e.target.value)} value={name} />&nbsp;
                <TextField label="Author" onChange={(e) => setAuthor(e.target.value)} value={author} /><br /><br />
                <TextField type="number" label="Count" onChange={(e) => setCount(e.target.value)} value={count} />&nbsp;


                <Button variant="contained" color="primary" onClick={(e) => handleBookClick(e)}>
                  <Add />
                </Button>


              </form>
              <TableContainer>
                <Table style={{ maxWidth: '650px' }} aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell>ID</TableCell>
                      <TableCell >Name</TableCell>
                      <TableCell >Author</TableCell>
                      <TableCell >Count</TableCell>
                      <TableCell >Action</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {props.books.map((row) => (
                      <TableRow key={row.id}>
                        <TableCell component="th" scope="row">
                          {row.id}
                        </TableCell>
                        <TableCell >{row.name}</TableCell>
                        <TableCell >{row.author}</TableCell>
                        <TableCell >{row.count}</TableCell>
                        <TableCell >
                          <IconButton color="primary" onClick={() => dispatch(incrementsBook(row.id))}>
                            <Add />
                          </IconButton>
                          <IconButton color="primary" onClick={() => dispatch(decrementBook(row.id))}>
                            <Remove />
                          </IconButton>
                          <IconButton color="primary" onClick={() => dispatch(deleteBook(row.id))}>
                            <Delete />
                          </IconButton>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </div>
          </Grid>
          {/* <Grid item xs={12} sm={4}>
            <h1>Book List</h1>
            <div>
              <form>
                <TextField type="number" label="Id" onChange={(e) => setId(e.target.value)} value={id} />&nbsp;
                <TextField label="Name" onChange={(e) => setName(e.target.value)} value={name} />&nbsp;
                <TextField label="Author" onChange={(e) => setAuthor(e.target.value)} value={author} /><br /><br />
                <TextField type="number" label="Count" onChange={(e) => setCount(e.target.value)} value={count} />&nbsp;


                <Button variant="contained" color="primary" onClick={(e) => handleBookClick(e)}>
                  <Add />
                </Button>


              </form>
              <TableContainer>
                <Table style={{ maxWidth: '650px' }} aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell>ID</TableCell>
                      <TableCell >Name</TableCell>
                      <TableCell >Author</TableCell>
                      <TableCell >Count</TableCell>
                      <TableCell >Action</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {props.books.map((row) => (
                      <TableRow key={row.id}>
                        <TableCell component="th" scope="row">
                          {row.id}
                        </TableCell>
                        <TableCell >{row.name}</TableCell>
                        <TableCell >{row.author}</TableCell>
                        <TableCell >{row.count}</TableCell>
                        <TableCell >
                          <IconButton color="primary" onClick={() => dispatch(incrementsBook(row.id))}>
                            <Add />
                          </IconButton>
                          <IconButton color="primary" onClick={() => dispatch(decrementBook(row.id))}>
                            <Remove />
                          </IconButton>
                          <IconButton color="primary" onClick={() => dispatch(deleteBook(row.id))}>
                            <Delete />
                          </IconButton>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </div>
          </Grid> */}
        </Grid>


      </div>

    </div >
  );
}

const mapStateToProps = (state) =>
{
  return {
    birds: state.birds.sort((a, b) => { return a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1 }),
    books: state.books.sort((a, b) => { return a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1 })
  };
};

// export default connect(mapStateToProps)(App);


export default connect(mapStateToProps)(App);
