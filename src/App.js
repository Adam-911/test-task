import { Table } from 'antd';
import "antd/dist/antd.css";
import './App.css';
import docIcon from './assets/icons/docIcon.svg';
import pointsIcon from './assets/icons/points.svg';
import { ReactComponent as IcircleDoc } from './assets/icons/circleDoc.svg';
import { ReactComponent as ISearch } from './assets/icons/searchIcon.svg';
import { ReactComponent as IPlusDoc} from './assets/icons/plusDoc.svg';
import ToolBar from './components/tool-bar/ToolBar';

const mockData = [
  { id: 1, docType: "Накладная", date: '10.01.2022', owner: 'Акт выполненных работ с компанией Логитека', sum: '112 113 000,00 ₸', num: '1234' },
  { id: 2, docType: "Акт", date: '10.01.2022', owner: 'Акт выполненных работ с компанией Логитека', sum: '15 000,00 ₸', num: '1234' },
  { id: 3, docType: "Накладная", date: '10.01.2022', owner: 'Акт выполненных работ с компанией Логитека', sum: '15 000,00 ₸', num: '1234' },
  { id: 4, docType: "Накладная", date: '10.01.2022', owner: 'Акт выполненных работ с компанией Логитека', sum: '15 000,00 ₸', num: '1234' },
  { id: 5, docType: "Накладная", date: '10.01.2022', owner: 'Акт выполненных работ с компанией Логитека', sum: '15 000,00 ₸', num: '1234' },
  { id: 6, docType: "Накладная", date: '10.01.2022', owner: 'Акт выполненных работ с компанией Логитека', sum: '15 000,00 ₸', num: '1234' },
  { id: 7, docType: "Накладная", date: '10.01.2022', owner: 'Акт выполненных работ с компанией Логитека', sum: '15 000,00 ₸', num: '1234' },      
];


function App() {
  const columns = [
    {
      key: 'points',
      width: '5%',
      align: 'center',
      render: (data) => (
        <span>
          <img src={pointsIcon}/>
        </span>
      )
    },
    {
      title: 'Документ',
      dataIndex: 'docType',
      key: 'docType',
      render: (data) => (
        <span>
          <img src={docIcon}/>
          {` ${data}`}
        </span>
      )
    },
    {
      title: 'Номер',
      dataIndex: 'num',
      key: 'num',
      // sorter: (a, b) => a.num - b.num,
    },
    {
      title: 'Дата',
      dataIndex: 'date',
      key: 'date',
    },
    {
      title: 'ЭДО',
      key: 'points',
      render: (data) => (
        <span>
          <IcircleDoc/>
        </span>
      )
    },
    {
      title: (data) => (
        <span>
          {`Покупатель `}
          <ISearch/>
          <input className='search-input'/>
        </span>
      ),
      width: '30%',
      dataIndex: 'owner',
      key: 'owner',
    },
    {
      title: () => (<div style={{color: '#0D4B79'}}>Сумма</div>),
      dataIndex: 'sum',
      key: 'sum',
      render: (data) => {
        return {
          props: {
            style: { color: '#0D4B79' }
          },
          children: <div>{data}</div>
        }
      }
    },
    {
      title: 'Счет',
      key: 'docPlus',
      align: 'center',
      render: () => {
        return {
          props: {
            style: { background: '#ECEFF1' }
          },
          children: <a><IPlusDoc/></a>
        }
      }
    },
    {
      title: 'СФ',
      key: 'sf',
      align: 'center',
      render: () => {
        return {
          props: {
            style: { background: '#ECEFF1' }
          },
          children: <a><IPlusDoc/></a>
        }
      }
    },
    {
      title: 'ЭСФ',
      key: 'isf',
      align: 'center',
      render: () => {
        return {
          props: {
            style: { background: '#ECEFF1' }
          },
          children: <a><IPlusDoc/></a>
        }
      }
    },
  ]

  return (
    <div className="App">
      <div className='container'>
        <Table
          columns={columns}
          dataSource={mockData}
          pagination={false}
          summary={() => (
            <Table.Summary>
              <Table.Summary.Row>
                <Table.Summary.Cell className='cell-align-text' index={6} colSpan={6}>Итого за период</Table.Summary.Cell>
                <Table.Summary.Cell className='sum-color' index={8} colSpan={8}><strong>KZT</strong> 987 458 220,00</Table.Summary.Cell>
              </Table.Summary.Row>
            </Table.Summary>
          )}
        />
        <ToolBar/>
      </div>
    </div>
  );
}

export default App;
