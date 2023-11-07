'use client'
import React, { useState } from 'react'
import { MDBDataTable, MDBInput, MDBBtn } from 'mdbreact';
import './itemlist.css';



const page = () => {
    // const handleSelect = (e: any) => {
    //     console.log(e);
    // }
    const [counter, setCounter] = useState(1);
    const increase = (e:any) => {
        // setCounter(count => count + 1);
        switch (e.target.id) {
            case 'i1':
                setCounter1(count => count + 1);
              break;
            case 'i2':
                setCounter2(count => count + 1);
              break;
            case 'i3':
                setCounter3(count => count + 1);
              break;
            case 'i4':
                setCounter4(count => count + 1);
              break;
            case 'i5':
                setCounter5(count => count + 1);
          }
    };
    const decrease = (e:any) => {
        switch (e.target.id) {
            case 'd1':
                setCounter1(count => count - 1);
              break;
            case 'd2':
                setCounter2(count => count - 1);
              break;
            case 'd3':
                setCounter3(count => count - 1);
              break;
            case 'd4':
                setCounter4(count => count - 1);
              break;
            case 'd5':
                setCounter5(count => count - 1);
          }
        
    };

    const [counter1, setCounter1] = useState(1);
    const [counter2, setCounter2] = useState(1);
    const [counter3, setCounter3] = useState(1);
    const [counter4, setCounter4] = useState(1);
    const [counter5, setCounter5] = useState(1);


    //reset counter 
    // const reset = () => {
    //     setCounter(0)
    // }

    const [state, setState] = useState({
        checked: []
    });

    const toggleCheck = (e: any) => {
        let checkedArr = state.checked;
        checkedArr.filter(name => name === e.target.id)[0]
            ? checkedArr = checkedArr.filter(name => name !== e.target.id)
            : checkedArr.push(e.target.id);
        setState({ checked: checkedArr })
    };

    const isChecked = (id: any) => state.checked.filter(name => name === id)[0] ? true : false



    const data = {
        columns: [
            {
                label: 'Check',
                field: 'check',
                sort: 'disabled',
                width: 20
            },
            {
                label: 'Qty',
                field: 'qty',
                sort: 'disabled',
                width: 20
            },
            {
                label: 'ID',
                field: 'id',
                sort: 'asc',
                width: 150
            },
            {
                label: 'Item Name',
                field: 'itemname',
                sort: 'asc',
                width: 270
            },
            {
                label: 'Description',
                field: 'desc',
                sort: 'asc',
                width: 200
            },
            {
                label: 'Price',
                field: 'price',
                sort: 'asc',
                width: 100
            }

        ],
        rows: [
            {
                check:
                    <MDBInput className="defaultCheckbox m-0" label=' ' type='checkbox' id='checkbox1' onClick={toggleCheck} checked={isChecked('checkbox1')} />,
                qty:

                    <div>
                       
                        <div className="btn__container">
                            {/* <button className="reset inputCounter" onClick={reset}>Reset</button> */}
                            <button className="control__btn inputCounter" id="d1" onClick={decrease}>-</button>
                            <input type="text" className="w-10 inputCounter" value={counter1} onChange={(e: any) => { setCounter1(e.target.value) }} />
                            <button className="control__btn inputCounter" id="i1" onClick={increase}>+</button>
                        </div>
                    </div>,
                id: '1',
                itemname: 'item 1',
                desc: 'item 1 desc',
                price: 500
                // clickEvent: (e: any) => handleSelect(e)
            },
            {
                check:
                    <MDBInput className="defaultCheckbox m-0" label=' ' type='checkbox' id='checkbox2' onClick={toggleCheck} checked={isChecked('checkbox2')} />,
                qty:
                    <div>
          
                        <div className="btn__container">
                            {/* <button className="reset inputCounter" onClick={reset}>Reset</button> */}
                            <button className="control__btn inputCounter" id="d2" onClick={decrease}>-</button>
                            <input type="text" className="w-10 inputCounter" value={counter2} onChange={(e: any) => { setCounter(e.target.value) }} />
                            <button className="control__btn inputCounter" id="i2" onClick={increase}>+</button>
                        </div>
                    </div>,
                id: '2',
                itemname: 'item 2',
                desc: 'item 2 desc',
                price: 200
                // clickEvent: (e: any) => handleSelect(e)
            },
            {
                check:
                    <MDBInput className="defaultCheckbox m-0" label=' ' type='checkbox' id='checkbox3' onClick={toggleCheck} checked={isChecked('checkbox3')} />,
                qty:
                    <div>
                        <div className="btn__container">
                            {/* <button className="reset inputCounter" onClick={reset}>Reset</button> */}
                            <button className="control__btn inputCounter" id="d3" onClick={decrease}>-</button>
                            <input type="text" className="w-10 inputCounter" value={counter3} onChange={(e: any) => { setCounter(e.target.value) }} />
                            <button className="control__btn inputCounter" id="i3" onClick={increase}>+</button>
                        </div>
                    </div>,
                id: '3',
                itemname: 'item 3',
                desc: 'item 3 desc',
                price: 300
                // clickEvent: (e: any) => handleSelect(e)
            },
            {
                check:
                    <MDBInput className="defaultCheckbox m-0" label=' ' type='checkbox' id='checkbox4' onClick={toggleCheck} checked={isChecked('checkbox4')} />,
                qty:
                    <div>
                        <div className="btn__container">
                            {/* <button className="reset inputCounter" onClick={reset}>Reset</button> */}
                            <button className="control__btn inputCounter" id="d4" onClick={decrease}>-</button>
                            <input type="text" className="w-10 inputCounter" value={counter4} onChange={(e: any) => { setCounter(e.target.value) }} />
                            <button className="control__btn inputCounter" id="i4" onClick={increase}>+</button>
                        </div>
                    </div>,
                id: '4',
                itemname: 'item 4',
                desc: 'item 4 desc',
                price: 400
                // clickEvent: (e: any) => handleSelect(e)
            },
            {
                check:
                    <MDBInput className="defaultCheckbox m-0" label=' ' type='checkbox' id='checkbox5' onClick={toggleCheck} checked={isChecked('checkbox5')} />,
                qty:
                    <div>
                        <div className="btn__container">
                            {/* <button className="reset inputCounter" onClick={reset}>Reset</button> */}
                            <button className="control__btn inputCounter" id="d5" onClick={decrease}>-</button>
                            <input type="text" className="w-10 inputCounter" value={counter5} onChange={(e: any) => { setCounter(e.target.value) }} />
                            <button className="control__btn inputCounter" id="i5" onClick={increase}>+</button>
                        </div>
                    </div>,
                id: '5',
                itemname: 'item 5',
                desc: 'item 5 desc',
                price: 500
            }
        ]
    };

    return (
        <div>
            <div className='m-0 p-0 text-center'>
                <MDBBtn outline rounded color='success'>
                    PO
                </MDBBtn>
                <MDBBtn outline rounded className='mx-2' color='info'>
                    View All
                </MDBBtn>
                <MDBBtn outline rounded className='mx-2' color='dark'>
                    PR
                </MDBBtn>
                
            </div>
            <MDBDataTable className='p-2 datatableitems'
                striped
                bordered
                small
                data={data}
                checkbox
            />

        </div>
    )
}

export default page



