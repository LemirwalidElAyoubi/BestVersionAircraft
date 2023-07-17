import React, { useEffect } from 'react';


import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
} from "@chakra-ui/react";

/////////////////////////////////////////////////////////////////////////////////////////////

function TableComponent({ sheet }) {
  const renderTableRows = () => {
    if (sheet === 'TAKEOFF DRY') {
      const tableData = [
        '             ',
        'Rwy Length ft',
        'Rwy Length m',
        'FieldLimited',
        'Tire Speed Limited',
        'Climb (2nd seg) WAT',
        'Brake Energy (MBE)',
      ];
      console.log("HELLO,HEELOOAAAAAA ");
      return tableData.map((cellData, rowIndex) => (
        <Tr key={rowIndex}>
          <Td borderWidth="1px" p={1}>
            {cellData}
          </Td>
          {[1, 2, 3, 4, 5, 6].map((cellIndex) => (
            <Td borderWidth="1px" p={1} key={cellIndex}>
              Cell {cellIndex}-{rowIndex}
            </Td>
          ))}
        </Tr>
      ));
    }

    return null;
  };

  //const handleTableClick = () => {
    // Execute additional logic if needed
  //};

  useEffect(() => {
    renderTableRows();
    // You can add any additional logic here that needs to be executed when the sheet changes
  }, [sheet]);
console.log("HELLO ");
  return (
    <Table
      variant="striped"
      colorScheme="teal"
      borderWidth="1px"
      borderRadius="md"
      //onClick={handleTableClick}
      style={{ cursor: 'pointer' }}
    >
      <TableCaption>Aircraft Data</TableCaption>
      <Thead>
        <Tr>
          <Th borderWidth="1px" p={1}>
            Flaps= ,AC_Type={' '}
          </Th>
          <Th borderWidth="1px" p={1}>
            Alt (m)
          </Th>
          <Th borderWidth="1px" p={1}>
            Alt (ft)
          </Th>
          <Th borderWidth="1px" p={1}>
            DISA
          </Th>
          <Th borderWidth="1px" p={1}>
            OAT
          </Th>
          <Th borderWidth="1px" p={1}>
            QNH
          </Th>
        </Tr>
      </Thead>
      <Tbody>{renderTableRows()}</Tbody>
      <Tfoot>
        <Tr>
          <Th borderWidth="1px" p={1}>
            Flaps
          </Th>
          <Th borderWidth="1px" p={1}>
            Flaps#1
          </Th>
          <Th borderWidth="1px" p={1}>
            Flaps#2
          </Th>
          <Th borderWidth="1px" p={1}>
            Flaps#3
          </Th>
          <Th borderWidth="1px" p={1}>
            Flaps#4
          </Th>
          <Th borderWidth="1px" p={1}>
            Flaps#5
          </Th>
        </Tr>
      </Tfoot>
    </Table>
  );
}

////////////////////////////////////////////////////////////////////////////////////////////////////
function TableComponent_TW({ sheet }) {
  const renderTableRows = () => {
    if (sheet === "TAKEOFF WET") {
      const tableData = [
            '             ',
            'Rwy Length ft',
            'Rwy Length m',
            'FieldLimited',
            'Tire Speed Limited',
            'Climb (2nd seg) WAT',
            'Brake Energy (MBE)',
          ];
          return tableData.map((cellData, rowIndex) => (
            <Tr key={rowIndex}>
              <Td borderWidth="1px" p={1}>
                {cellData}
              </Td>
              {[1, 2, 3, 4, 5, 6].map((cellIndex) => (
                <Td borderWidth="1px" p={1} key={cellIndex}>
                  Cell {cellIndex}-{rowIndex}
                </Td>
              ))}
            </Tr>
          ));
        }
    
        return null;
      };

  return (
    <Table 
    variant='striped' 
    colorScheme='teal' 
    borderWidth='1px' 
    borderRadius='md'
    >
      <TableCaption>Aircraft Data</TableCaption>
      <Thead>
        <Tr>
          <Th borderWidth='1px' p={1}>Flaps=  ,AC_Type=  </Th>
          <Th borderWidth='1px' p={1}>Alt (m)</Th>
          <Th borderWidth='1px' p={1}>Alt (ft)</Th>
          <Th borderWidth='1px' p={1}>DISA</Th>
          <Th borderWidth='1px' p={1}>OAT</Th>
          <Th borderWidth='1px' p={1}>QNH</Th>
        </Tr>
      </Thead>
      <Tbody>
        {renderTableRows()}
      </Tbody>
      <Tfoot>
        <Tr>
          <Th borderWidth='1px' p={1}>Flaps</Th>
          <Th borderWidth='1px' p={1}>Flaps#1</Th>
          <Th borderWidth='1px' p={1}>Flaps#2</Th>
          <Th borderWidth='1px' p={1}>Flaps#3</Th>
          <Th borderWidth='1px' p={1}>Flaps#4</Th>
          <Th borderWidth='1px' p={1}>Flaps#5</Th>
        </Tr>
      </Tfoot>
    </Table>
  );
}

///////////////////////////////////////////////////////////////////////////////////////////////////
function TableComponent_LW({ sheet }) {
 
  const renderTableRows = () => {

    if (sheet === "LANDING WET") {
      const tableData = [
      '          ', 
      'Rwy Length ft', 
      'Rwy Length m', 
      'Field Limit (FieldLength)',
      'APP CLB Limit(WAT)',
      'LDG CLB Limit (WAT)',
      'Quick Turn (MBE)'];


      return tableData.map((cellData, rowIndex) => (
        <Tr key={rowIndex}>
          <Td borderWidth="1px" p={1}>
            {cellData}
          </Td>
          {[1, 2, 3, 4, 5, 6].map((cellIndex) => (
            <Td borderWidth="1px" p={1} key={cellIndex}>
              Cell {cellIndex}-{rowIndex}
            </Td>
          ))}
        </Tr>
      ));
    }

    return null;
  };

  return (
    <Table 
    variant='striped'
    colorScheme='teal'
    borderWidth='1px'
    borderRadius='md'
    >
      <TableCaption>Aircraft Data</TableCaption>
      <Thead>
        <Tr>
          <Th borderWidth='1px' p={1}>Flaps=  ,AC_Type=  </Th>
          <Th borderWidth='1px' p={1}>Alt (m)</Th>
          <Th borderWidth='1px' p={1}>Alt (ft)</Th>
          <Th borderWidth='1px' p={1}>DISA</Th>
          <Th borderWidth='1px' p={1}>OAT</Th>
          <Th borderWidth='1px' p={1}>QNH</Th>
        </Tr>
      </Thead>
      <Tbody>
        {renderTableRows()}
      </Tbody>
      <Tfoot>
        <Tr>
          <Th borderWidth='1px' p={1}>Flaps</Th>
          <Th borderWidth='1px' p={1}>Flaps#1</Th>
          <Th borderWidth='1px' p={1}>Flaps#2</Th>
          <Th borderWidth='1px' p={1}>Flaps#3</Th>
          <Th borderWidth='1px' p={1}>Flaps#4</Th>
          <Th borderWidth='1px' p={1}>Flaps#5</Th>
        </Tr>
      </Tfoot>
    </Table>
  );
}

////////////////////////////////////////////////////////////////////////////////////////////////////
function TableComponent_LD({sheet }) {
  const renderTableRows = () => {

    if (sheet === "LANDING DRY") {
      const tableData = [
      'OWE=    ,MTOW=     ',
      'Rwy Length ft',
      'Rwy Length m',
      'FieldLimit(Field Length)',
      'APP CLB Limit (WAT)',
      'LDG CLB Limit (WAT)',
       'Quick Turn (MBE)'];

       return tableData.map((cellData, rowIndex) => (
        <Tr key={rowIndex}>
          <Td borderWidth="1px" p={1}>
            {cellData}
          </Td>
          {[1, 2, 3, 4, 5, 6].map((cellIndex) => (
            <Td borderWidth="1px" p={1} key={cellIndex}>
              Cell {cellIndex}-{rowIndex}
            </Td>
          ))}
        </Tr>
      ));
    }

    return null;
  };

  return (
    <Table 
    variant='striped' 
    colorScheme='teal' 
    borderWidth='1px' 
    borderRadius='md'>
      <TableCaption>Analysis Data</TableCaption>
      <Thead>
        <Tr>
          <Th borderWidth='1px' p={1}>Flaps=  ,Wind=  ,Slope=  </Th>
          <Th borderWidth='1px' p={1}>Alt (m)</Th>
          <Th borderWidth='1px' p={1}>Alt (ft)</Th>
          <Th borderWidth='1px' p={1}>DISA</Th>
          <Th borderWidth='1px' p={1}>OAT</Th>
          <Th borderWidth='1px' p={1}>QNH</Th>
        </Tr>
      </Thead>
      <Tbody>
        {renderTableRows()}
      </Tbody>
      <Tfoot>
        <Tr>
          <Th borderWidth='1px' p={1}>Flaps</Th>
          <Th borderWidth='1px' p={1}>Flaps#1</Th>
          <Th borderWidth='1px' p={1}>Flaps#2</Th>
          <Th borderWidth='1px' p={1}>Flaps#3</Th>
          <Th borderWidth='1px' p={1}>Flaps#4</Th>
          <Th borderWidth='1px' p={1}>Flaps#5</Th>
        </Tr>
      </Tfoot>
    </Table>
  );
}


////////////////////////////////////////////////////////////////////////////////////////////////////
function Tables({ selectedSheet, showTitles = true }) {
  const tableComponents = [];
  const tableCount = 48;

  /* for (let i = 1; i <= tableCount; i++) {
    tableComponents.push(<TableComponent key={i} sheet={selectedSheet} />);
  } */
//remark maybe here it doesnt need an ifstatement but how should i integrate the sheets name in it ??
  for (let i = 1; i <= tableCount; i++) {
    if (selectedSheet === 'TAKEOFF DRY') {
      tableComponents.push(<TableComponent key={i} sheet={selectedSheet} />);
     }  else if (selectedSheet === 'TAKEOFF WET') {
      tableComponents.push(<TableComponent_TW key={i} sheet={selectedSheet}/>);
    } else if (selectedSheet === 'LANDING DRY') {
      tableComponents.push(<TableComponent_LD key={i} sheet={selectedSheet} />);
    } else if (selectedSheet === 'LANDING WET') {
      tableComponents.push(<TableComponent_LW key={i} sheet={selectedSheet} />);
    } else {
      tableComponents.push(null);
    }
  } 

 // const tableLines = ["TAIL-WIND-DATA", "HEAD-WIND-DATA", "ZERO-WIND-DATA"];

/*   return (
    <div>
      {showTitles &&
        tableLines.map((title, index) => (
          <React.Fragment key={index}>
            <h1 className="red-header">{title}</h1>
            <div
              className="tables-container"
              style={{ overflowX: "auto", whiteSpace: "nowrap" }}
            >
              {tableComponents
                .slice(index * 16, (index + 1) * 16)
                .map((component, componentIndex) => (
                  <div
                    className="table-column"
                    style={{ marginRight: "10px" }}
                    key={componentIndex}
                  >
                    {component}
                  </div>
                ))}
            </div>
          </React.Fragment>
        ))}
    </div>
  ); */

  
  return (
    <div>
      {showTitles && (
        <>
          <h1 className="red-header">TAIL-WIND-DATA</h1>
          <div className="tables-container"
           style={{ overflowX: 'auto',
            whiteSpace: 'nowrap' }}>
            {/* Table Line 1 */}
            <div className="table-row" style={{ display: 'flex' }}>

              {tableComponents.slice(0, 4).map((component, index) => (
                <div className="table-column" style={{ marginRight: '10px' }} key={index}>
                  {component}
                </div>
              ))}
            </div>
            {/* Table Line 2 */}
            <div className="table-row"
             style={{ display: 'flex',
              marginTop: '10px' }}>
              {tableComponents.slice(4, 8).map((component, index) => (
                <div className="table-column" style={{ marginRight: '10px' }} key={index}>
                  {component}
                </div>
              ))}
            </div>
            {/* Table Line 3 */}
            <div className="table-row"
             style={{ display: 'flex', marginTop: '10px' }}>
              {tableComponents.slice(8, 12).map((component, index) => (
                <div className="table-column" style={{ marginRight: '10px' }} key={index}>
                  {component}
                </div>
              ))}
            </div>
            {/* Table Line 4 */}
            <div className="table-row" style={{ display: 'flex', marginTop: '10px' }}>
              {tableComponents.slice(12, 16).map((component, index) => (
                <div className="table-column" style={{ marginRight: '10px' }} key={index}>
                  {component}
                </div>
              ))}
            </div>
          </div>
          <h1 className="red-header">HEAD-WIND-DATA</h1>
          <div className="tables-container" style={{ overflowX: 'auto', whiteSpace: 'nowrap' }}>
            {/* Table Line 1 */}
            <div className="table-row" style={{ display: 'flex' }}>
              {tableComponents.slice(16, 20).map((component, index) => (
                <div className="table-column" style={{ marginRight: '10px' }} key={index}>
                  {component}
                </div>
              ))}
            </div>
            {/* Table Line 2 */}
            <div className="table-row" style={{ display: 'flex', marginTop: '10px' }}>
              {tableComponents.slice(20, 24).map((component, index) => (
                <div className="table-column" style={{ marginRight: '10px' }} key={index}>
                  {component}
                </div>
              ))}
            </div>
            {/* Table Line 3 */}
            <div className="table-row" 
            style={{ display: 'flex', 
            marginTop: '10px' }}>

              {tableComponents.slice(24, 28).map((component, index) => (
                <div className="table-column" style={{ marginRight: '10px' }} key={index}>
                  {component}
                </div>
              ))}
            </div>
            {/* Table Line 4 */}
            <div className="table-row" 
            style={{ display: 'flex',
             marginTop: '10px' }}>
              {tableComponents.slice(28, 32).map((component, index) => (
                <div className="table-column" style={{ marginRight: '10px' }} key={index}>
                  {component}
                </div>
              ))}
            </div>
          </div>
          <h1 className="red-header">ZERO-WIND-DATA</h1>
          <div className="tables-container" style={{ overflowX: 'auto', whiteSpace: 'nowrap' }}>
            {/* Table Line 1 */}
            <div className="table-row" 
            style={{ display: 'flex' }}>

              {tableComponents.slice(32, 36).map((component, index) => (
                <div className="table-column" style={{ marginRight: '10px' }} key={index}>
                  {component}
                </div>
              ))}
            </div>
            {/* Table Line 2 */}
            <div className="table-row" 
            style={{ display: 'flex',
             marginTop: '10px' }}>

              {tableComponents.slice(36, 40).map((component, index) => (
                <div className="table-column" style={{ marginRight: '10px' }} key={index}>
                  {component}
                </div>
              ))}
            </div>
            {/* Table Line 3 */}
            <div className="table-row" 
            style={{ display: 'flex',
             marginTop: '10px' }}>

              {tableComponents.slice(40, 44).map((component, index) => (
                <div className="table-column" style={{ marginRight: '10px' }} key={index}>
                  {component}
                </div>
              ))}
            </div>
            {/* Table Line 4 */}
            <div className="table-row" 
            style={{ display: 'flex',
             marginTop: '10px' }}>

              {tableComponents.slice(44, 48).map((component, index) => (
                <div className="table-column"
                 style={{ marginRight: '10px' }} key={index}>
                  {component}
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );


}

export default Tables;