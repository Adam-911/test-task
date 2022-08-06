import { Table, Tooltip } from 'antd';
import "antd/dist/antd.css";
import './App.css';
import docIcon from './assets/icons/docIcon.svg';
import pointsIcon from './assets/icons/points.svg';
import { ReactComponent as IcircleDoc } from './assets/icons/circleDoc.svg';
import { ReactComponent as ISearch } from './assets/icons/searchIcon.svg';
import { ReactComponent as IPlusDoc} from './assets/icons/plusDoc.svg';
import ToolBar from './components/tool-bar/ToolBar';
import StyledSum from './components/styled-sum/StyledSum';
// import Tooltip from './components/tooltip/Tooltip';

const mockData = [
  { id: 1, docType: "Накладная", date: '10.01.2022', owner: 'Акт выполненных работ с компанией Логитека', sum: '112 113 000', num: '112312' },
  { id: 2, docType: "Акт", date: '10.01.2022', owner: 'Счет фактура работ с компанией Майбух оказа', sum: '15 000', num: '1011111' },
  { id: 3, docType: "Акт/накладная", date: '10.01.2022', owner: 'Счет фактура работ с компанией Майбух оказа', sum: '15 000', num: '12' },
  { id: 4, docType: "Накладная", date: '10.01.2022', owner: 'Акт выполненных работ с компанией Логитека', sum: '15 000', num: '112312' },
  { id: 5, docType: "Накладная", date: '10.01.2022', owner: 'Акт выполненных работ с компанией Логитека', sum: '15 000', num: '112312' },
  { id: 6, docType: "Накладная", date: '10.01.2022', owner: 'Счет фактура работ с компанией Майбух оказн', sum: '15 000', num: '9' },
  { id: 7, docType: "Накладная", date: '10.01.2022', owner: 'Счет фактура работ с компанией Майбух оказн', sum: '15 000', num: '9' },
];


function App() {

  const tooltipTitle = () => (
    <span>
      Статус документа — 
      <span className='text-green'> подписан получателем </span> 
      (06.05.2021)
    </span>
  )

  const columns = [
    {
      key: 'points',
      align: 'center',
      className: 'points-column',
      render: () => (
        <span>
          <img src={pointsIcon}/>
        </span>
      )
    },
    {
      title: 'Документ',
      dataIndex: 'docType',
      key: 'docType',
      className: 'header-font-style',
      defaultSortOrder: 'descend',
      showSorterTooltip: false,
      sorter: (a, b) => a.docType - b.docType,
      render: (data) => (
        <span>
          <img style={{marginRight: '10px'}}src={docIcon}/>
          {` ${data}`}
        </span>
      )
    },
    {
      title: 'Номер',
      dataIndex: 'num',
      align: 'center',
      className: 'header-font-style',
      key: 'num',
      defaultSortOrder: 'descend',
      showSorterTooltip: false,
      sorter: (a, b) => a.num - b.num,
    },
    {
      title: 'Дата',
      dataIndex: 'date',
      className: 'header-font-style',
      key: 'date',
      defaultSortOrder: 'descend',
      showSorterTooltip: false,
      sorter: (a, b) => a.date - b.date,
    },
    {
      title: 'ЭДО',
      key: 'points',
      align: 'center',
      className: 'header-font-style',
      render: () => (
        <Tooltip title={ tooltipTitle }>
          <IcircleDoc/>
        </Tooltip>
      )
    },
    {
      title: () => (
        <span>
          {`Покупатель `}
          <ISearch/>
          <input className='search-input'/>
        </span>
      ),
      className: 'owner-column header-font-style',
      dataIndex: 'owner',
      key: 'owner',
    },
    {
      title: () => (<div style={{color: '#0D4B79'}}>Сумма</div>),
      dataIndex: 'sum',
      key: 'sum',
      align: 'right',
      className: 'sum-column header-font-style',
      render: (data) => {
        return {
          props: {
            style: { color: '#0D4B79' }
          },
          children: <StyledSum value={data} isCurrency/>
        }
      }
    },
    {
      key: 'separator',
      align: 'center',
      className: 'separator-column'
    },
    {
      title: 'Счет',
      key: 'docPlus',
      align: 'center',
      className: 'doc-column header-font-style',
      render: () => {
        return <a><IPlusDoc/></a>
      }
    },
    {
      key: 'separator',
      align: 'center',
      className: 'separator-column'
    },
    {
      title: 'СФ',
      key: 'sf',
      align: 'center',
      className: 'doc-column header-font-style',
      render: () => {
        return <a><IPlusDoc/></a>
      }
    },
    {
      key: 'separator',
      align: 'center',
      className: 'separator-column'
    },
    {
      title: 'ЭСФ',
      key: 'isf',
      align: 'center',
      className: 'doc-column right-margin header-font-style',
      render: () => {
        return <a><IPlusDoc/></a>
      }
    },
    {
      key: 'empty',
      align: 'center',
      className: 'empty-column'
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
            <div className='cell-align-text'> 
              Итого за период <span><strong>KZT</strong> <StyledSum value={'987 458 220'}/></span>
            </div>
          )}
        />
        <ToolBar/>
      </div>
    </div>
  );
}

export default App;
