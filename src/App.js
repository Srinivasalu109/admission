/*eslint-disable*/
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/App.css';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import { IoIosAddCircleOutline } from "react-icons/io";
import { Button } from 'react-bootstrap';
import Card from '@material-ui/core/Card';
import React from 'react';
import CancelIcon from '@material-ui/icons/Cancel';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { useState } from 'react';
import { FaBullhorn, FaRegSun } from "react-icons/fa"
var isClicked = [false, false, false, false, false]
const four = [0, 1, 2, 3]
const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});
function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];
const menu=["Home","Dashboard","Leads","Student","Fees","Teachers","Classes","Exams","Live Classes","Users",
"Attendence","Content Library","Online Test","Communication","Store"]
function App() {
  const classes = useStyles();
  const [trigger, setTrigger] = useState(0)
const[click ,setClicked]=useState(false)
  const navItems = ["Courses", "Standard", "Subject", "Topic", "Ecourse Mapping"]
  const handleClick = (i) => {
    console.log(i)
    isClicked = isClicked.map((flag, index) => {
      if (index === i) {
        return (true)
      }
      else {
        return (false)
      }
    })
    console.log(isClicked)

    setTrigger(trigger + 1)
  }
  const openclose=()=>{
setClicked(!click)
  }
  return (
    <div className="App">
      <div className="header">
        <div className="burger" onClick={openclose}>     
<MenuIcon />
</div>
      </div>
      <div className="menubar">
        <div className="menusearch">
          <SearchIcon className="searchicon" />
          <input placeholder="Search here..." />
        </div>
        <div className="menuicons">
          <div className="endIcons">
            <button class="button"><div><span>Download App</span><ExpandMoreIcon /></div></button>
            <FontAwesomeIcon icon={["fas", "fa-bullhorn"]} />
          </div>
          <div className="seticons">
          <FaBullhorn size="2rem" />
          <FaRegSun size="2rem" />
          <IoIosAddCircleOutline size="2rem" />
          </div>
        </div>
      </div>
      <div className={!click?`sidemenu`:"absolute"}>
        <div>

<div className="ias">CHANGE IAS</div>
<div>
{
  menu.map(menu=><div className={`sidebaritem`}>{menu}</div>)
}
</div>
<div className="visible">
  <CancelIcon/>
</div>

</div>
      </div>
      <div className="contentbody">

        <div>

          <div className="navItems">
            {
              navItems.map((item, index) => <div className={`${isClicked[index] ? "display" : "notclicked"}`} onClick={() => handleClick(index)}>{item}</div>)
            }
          </div>
          {
            isClicked[0] ? <div className="center">

              <div className="courseflex">

                <div >
                  <select className="courseselect">
                    <option value="0">SelectMaster Course*</option>
                    <option value="1">Machine Learning</option>
                    <option value="2">Artificial Intiligence</option>
                    <option value="3">Python Programming</option>
                    <option value="4">CPP Programming</option>
                    <option value="5">C Programming</option>
                    <option value="6">Java</option>
                  </select>
                  <select className="selectyears">
                    <option value="0">2021-2022</option>
                    <option value="1">2020-2021</option>
                    <option value="2">2019-2020</option>
                    <option value="3">2018-2019</option>
                    <option value="4">2017-2018</option>
                    <option value="5">2016-2017</option>
                    <option value="6">2015-1016</option>
                  </select>
                </div>
                <div className="addcourse">
                  <input className="searchcourse" placeholder="Search" />
                  <Button variant="primary">Go</Button>
                  <Button variant="primary">AddCourse</Button>
                </div>
              </div>
              <div className="target">
                <div>TARGET 2022</div>
                <div>standard BATCH1</div>
              </div>
              <div>


                <div className="allcards">
                  {
                    four.map(card => <Card className="card">
                      <div className="boxtext">CLASSROOM CUM MENTORS HIP</div>
                      <div className="date"><div>End Date:</div><div>01-jun-2022</div></div>
                      <div className="total"><div>Total Students:0</div><div className="assign">Assign/Unassign</div></div>

                    </Card>)
                  }
                </div>

              </div>

            </div> : null
          }

        </div>
        {
          isClicked[2] ?
            <div>
              <div className="subject">
              <div>
                <select className="selectyears">
                  <option value="0">Select Standard</option>
                  <option value="1">2020-2021</option>
                  <option value="2">2019-2020</option>
                  <option value="3">2018-2019</option>
                  <option value="4">2017-2018</option>
                  <option value="5">2016-2017</option>
                  <option value="6">2015-1016</option>
                </select>
                <input type="checkbox" className="checkbox"/><label>is Active</label>
              </div>
              <div>
                <input placeholder="Search" className="searchsubject" />
                <Button variant="primary">Add Subject</Button>
              </div>
              </div>
              <TableContainer component={Paper}>
                <Table className={classes.table} size="small" aria-label="a dense table">
                  <TableHead>
                    <TableRow>
                      <TableCell>ID</TableCell>
                      <TableCell align="right">Standard</TableCell>
                      <TableCell align="right">Subject</TableCell>
                      <TableCell align="right">Subject Code</TableCell>
                      <TableCell align="right">Adress Date</TableCell>
                      <TableCell align="right">Actions</TableCell>

                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rows.map((row) => (
                      <TableRow key={row.name}>
                        <TableCell component="th" scope="row">
                          {row.name}
                        </TableCell>
                        <TableCell align="right">{row.calories}</TableCell>
                        <TableCell align="right">{row.fat}</TableCell>
                        <TableCell align="right">{row.carbs}</TableCell>
                        <TableCell align="right">{row.protein}</TableCell>
                        <TableCell align="right">{row.protein}</TableCell>

                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>

            </div> : null
        }
      </div>
    </div>


  );
}

export default App;
