import React, { useEffect, useState } from 'react'
import {
    Progress,
    ButtonBorder,
    ButtonDefault,
    ButtonDefaultIcon,
    ButtonDefaultWithLoad,
    ButtonDelete,
    ButtonIcon,
    ButtonIconOption,
    ButtonLabel,
    ButtonLarge,
    ButtonLargeSecondary,
    ButtonSecondary,
    ButtonSecondaryIcon,
    ButtonSecondaryWithLoad,
    ColEdit,
    ColTag,
    ColWarn,
    FieldCheck,
    FieldCheckBox,
    FieldComboBox,
    FieldComboGrid,
    FieldDate,
    FieldDateNoTitle,
    FieldDropdown,
    FieldDropdownMulti,
    FieldEmployee,
    FieldItemList,
    FieldItemListAdd,
    FieldItemListGrid,
    FieldItemListGridGet,
    FieldLabel,
    FieldLabelBorder,
    FieldNumber,
    FieldNumberFormat,
    FieldNumberGrid,
    FieldPassword,
    FieldSearch,
    FieldText,
    FieldTextArea,
    FieldTextGrid,
    FieldTextlarge,
    FieldTextVoid,
    GridAction,
    GridAdd,
    GridColCheck,
    GridDefault,
    GridDefaultShimmer,
    GridField,
    GridFilter,
    GridGrouped,
    GridMultiSelect,
    IconExcel,
    IconFilter,
    IconFreeze,
    IconOrder,
    ListTree,
    LoadSpin,
    Number,
    NumberHideZero,
    PageFilter,
    PageHeader,
    PageStep,
    PageTitle,
    PageTitleMid,
    PanelBase,
    ReportApprovedDoc,
    ReportDoc,
    ReportFolder,
    Step,
    TextGridHeader,
    TextTitle,
    Warning,
    Header
} from 'dw-components';
import 'dw-components/dist/index.css'; const App = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false); const getData = async () => {
        let tData = [];
        setLoading(true);
        // await fetch('https://test-project-ae0d0-default-rtdb.asia-southeast1.firebasedatabase.app/users.json').then(res => {
        // return res.json();
        // }).then(response => {
        // tData.push(response);
        // tData.push(response);
        // });
        setLoading(false); setData(tData);
    }
    useEffect(() => {
        getData();
    }, []);
    
    const onPress =()=>{
       console.log('Press')
    }
    
    return (
        <div style={{ padding: 32 }}>
            <Header companyname="companyname" color="#000000" />
            <div style={{ marginTop: 16 }}>
                <GridDefaultShimmer columns={[
                    {
                        name: 'User code',
                        fieldName: 'usercode',
                        onRender: (item) => {
                            return (
                                <ColEdit onClick={() => { }}>{item.usercode}</ColEdit>
                            );
                        }
                        // onRender: (item) => {
                        // if (item && Object.keys(item).length > 0) {
                        // return (
                        // <ColEdit onClick={() => { }}>{item.usercode}</ColEdit>
                        // ); // } else {
                        // return (
                        // <div>Summary</div>
                        // );
                        // }
                        // }
                    }, {
                        name: 'User name',
                        fieldName: 'username'
                    }, {
                        name: 'note',
                        fieldName: 'note'
                    }, {
                        name: 'Qty',
                        fieldName: 'qty'
                    }
                ]}
                    data={data}
                    loading={loading}
                    summary
                />
            </div>
            <div style={{ marginTop: 16 }}>
                <Progress actual={10} expected={20}></Progress>
            </div>
            <div style={{ marginTop: 16 }}>
                <ButtonBorder text="ButtonBorder" />
            </div>
            <div style={{ marginTop: 16 }}>
                <ButtonDefault text="ButtonDefault" />
            </div>
            <div style={{ marginTop: 16 }}>
                <ButtonDefaultIcon iconName="Plus" text="ButtonDefaultIcon" />
            </div>
            <div style={{ marginTop: 16 }}>
                <ButtonDefaultWithLoad loading={true} text="ButtonDefaultWithLoad" />
            </div>
            <div style={{ marginTop: 16 }}>
                <ButtonDelete />
            </div>
            <div style={{ marginTop: 16 }}>
                <ButtonIcon text="ButtonIcon" />
            </div>
            <div style={{ marginTop: 16 }}>
                <ButtonIconOption white menuProps={[{
                    key: "SH",
                    text: "Албан байгууллага дотор шилжсэн"
                }]} text="ButtonIconOption" />
            </div>
            <div style={{ marginTop: 16 }}>
                <ButtonLabel text="ButtonLabel" />
            </div>
            <div style={{ marginTop: 16 }}>
                <ButtonLarge text="ButtonLarge" />
            </div>
            <div style={{ marginTop: 16 }}>
                <ButtonLargeSecondary text="ButtonLargeSecondary" />
            </div>
            <div style={{ marginTop: 16 }}>
                <ButtonSecondary text="ButtonSecondary" />
            </div>
            <div style={{ marginTop: 16 }}>
                <ButtonSecondaryIcon text="ButtonSecondaryIcon" />
            </div>
            <div style={{ marginTop: 16 }}>
                <ButtonSecondaryWithLoad text="ButtonSecondaryWithLoad" />
            </div>
            <div style={{ marginTop: 16 }}>
                <ColEdit>ColEdit</ColEdit>
            </div>
            <div style={{ marginTop: 16 }}>
                <ColTag data={["ColTag"]} />
            </div>
            <div style={{ marginTop: 16 }}>
                <ColWarn show value="ColWarn" message="ColWarn"></ColWarn>
            </div>
            <div style={{ marginTop: 16 }}>
                <FieldCheck title="FieldCheck" onChanged={() => { }} keyfield='keyfield' defaultValue={null} />
            </div>
            <div style={{ marginTop: 16 }}>
                <FieldCheckBox title="FieldCheck" onChanged={() => { }} keyfield='keyfield' defaultValue={null} />
            </div>
            <div style={{ marginTop: 16 }}>
                <FieldComboBox title="FieldComboBox" onChanged={() => { }} keyfield='keyfield' defaultValue={null} data={[{
                    key: "key",
                    text: "text"
                }]} />
            </div>
            <div style={{ marginTop: 16 }}>
                <FieldComboGrid title="FieldComboGrid" onChanged={() => { }} keyfield='keyfield' defaultValue={null} data={[{
                    key: "key",
                    text: "text"
                }]} />
            </div>
            <div style={{ marginTop: 16 }}>
                <FieldDate title="FieldDate" onChanged={() => { }} keyfield='keyfield' defaultValue={null} />
            </div>
            <div style={{ marginTop: 16 }}>
                <FieldDateNoTitle title="FieldDateNoTitle" onChanged={() => { }} keyfield='keyfield' defaultValue={null} />
            </div>
            <div style={{ marginTop: 16 }}>
                <FieldDropdown title="FieldDropdown" onChanged={() => { }} keyfield='keyfield' defaultValue={null} data={[{
                    key: "key",
                    text: "text"
                }]} />
            </div>
            <div style={{ marginTop: 16 }}>
                <FieldDropdownMulti title="FieldDropdownMulti" onChanged={() => { }} keyfield='keyfield' defaultValue={null} data={[{
                    key: "key",
                    text: "text"
                }]} />
            </div>
            <div style={{ marginTop: 16 }}>
                <FieldEmployee title="FieldEmployee" onChanged={() => { }} keyfield='keyfield' defaultValue={null} />
            </div>
            <div style={{ marginTop: 16 }}>
                <FieldItemList title="FieldItemList" onChanged={() => { }} keyfield='keyfield' defaultValue={null} />
            </div>
            <div style={{ marginTop: 16 }}>
                <FieldItemListAdd title="FieldItemListAdd" onChanged={() => { }} keyfield='keyfield' defaultValue={null} />
            </div>
            <div style={{ marginTop: 16 }}>
                <FieldItemListGrid title="FieldItemListGrid" onChanged={() => { }} keyfield='keyfield' defaultValue={null} />
            </div>
            <div style={{ marginTop: 16 }}>
                <FieldItemListGridGet title="FieldItemListGridGet" onChanged={() => { }} keyfield='keyfield' defaultValue={null} />
            </div>
            <div style={{ marginTop: 16 }}>
                <FieldLabel title="FieldLabel" />
            </div>
            <div style={{ marginTop: 16 }}>
                <FieldLabelBorder title="FieldLabelBorder" />
            </div>
            <div style={{ marginTop: 16 }}>
                <FieldNumber title="FieldNumber" onChanged={() => { }} keyfield='keyfield' defaultValue={null} />
            </div>
            <div style={{ marginTop: 16 }}>
                <FieldNumberFormat title="FieldNumberFormat" onChanged={() => { }} keyfield='keyfield' defaultValue={null} />
            </div>
            <div style={{ marginTop: 16 }}>
                <FieldNumberGrid title="FieldNumberGrid" onChanged={() => { }} keyfield='keyfield' defaultValue={null} />
            </div>
            {/* <div style={{ marginTop: 16 }}>
<FieldPassword title="FieldPassword" onChanged={() => { }} keyfield='keyfield' defaultValue={null} />
</div>
<div style={{ marginTop: 16 }}>
<FieldPassword title="FieldPassword" onChanged={() => { }} keyfield='keyfield' defaultValue={null} />
</div> */}
            <div style={{ marginTop: 16 }}>
                <FieldSearch placeholder="FieldSearch" />
            </div>
            <div style={{ marginTop: 16 }}>
                <FieldText title="FieldText" onChanged={() => { }} keyfield='keyfield' defaultValue={null} />
            </div>
            <div style={{ marginTop: 16 }}>
                <FieldTextArea title="FieldTextArea" onChanged={() => { }} keyfield='keyfield' defaultValue={null} />
            </div>
            <div style={{ marginTop: 16 }}>
                <FieldTextGrid title="FieldTextGrid" onChanged={() => { }} keyfield='keyfield' defaultValue={null} />
            </div>
            <div style={{ marginTop: 16 }}>
                <FieldTextlarge title="FieldTextlarge" onChanged={() => { }} keyfield='keyfield' defaultValue={null} />
            </div>
            <div style={{ marginTop: 16 }}>
                <FieldTextVoid title="FieldTextVoid" />
            </div>
            <div style={{ marginTop: 16 }}>
                <GridAction title="GridAction" />
            </div>
            <div style={{ marginTop: 16 }}>
                <GridAdd title="GridAdd" />
            </div>
            <div style={{ marginTop: 16 }}>
                <GridColCheck />
            </div>
            <div style={{ marginTop: 16 }}>
                <GridDefault columns={[]} data={[]} />
            </div>
            <div style={{ marginTop: 16 }}>
                <GridField columns={[]} data={[]} />
            </div>
            <div style={{ marginTop: 16 }}>
                <GridFilter columns={[]} data={[]} />
            </div>
            <div style={{ marginTop: 16 }}>
                <GridGrouped columns={[]} data={[]} />
            </div>
            <div style={{ marginTop: 16 }}>
                <GridMultiSelect title="GridMultiSelect" onChanged={() => { }} keyfield='keyfield' defaultValue={null} />
            </div>
            <div style={{ marginTop: 16 }}>
                <IconExcel />
            </div>
            <div style={{ marginTop: 16 }}>
                <IconFilter />
            </div>
            <div style={{ marginTop: 16 }}>
                <IconFreeze />
            </div>
            <div style={{ marginTop: 16 }}>
                <IconOrder />
            </div>
            <div style={{ marginTop: 16 }}>
                <ListTree title="ListTree" columns={[]} data={[]} />
            </div>
            <div style={{ marginTop: 16 }}>
                <LoadSpin />
            </div>
            <div style={{ marginTop: 16 }}>
                <Number value="123" />
            </div>
            <div style={{ marginTop: 16 }}>
                <NumberHideZero value="" />
            </div>
            <div style={{ marginTop: 16 }}>
                <PageFilter onChange={() => { }} value={null} data={[]} dataCount={1} />
            </div>
            <div style={{ marginTop: 16 }}>
                <PageHeader
                    addButton={(
                        <div style={{ display: 'flex' }}>
                            <div>
                                <ButtonIcon text="Ажилд авсан түүх" iconName='Add' onClick={onPress}   />
                            </div>
                            <div style={{ marginLeft: 16 , marginTop : 7, transformOrigin: 20 }}>
                                <IconOrder title="Ажилд авсан түүх" iconName='Add'  />
                            </div>
                            <div style={{ marginLeft: 16, marginBottom : 5}}>
                                <ButtonIconOption text="Дотоод хөдөлгөөний түүх" iconName='Add'  />
                            </div>
                            <div style={{ marginLeft: 16 }}>
                                <ButtonIconOption text="Ажлаас чөлөөлсөн түүх" iconName='Add' />
                            </div>
                        </div>)}

                    title="PageHeader"
                    buttonTitle="Add PageHeader"
                    onButtonClick={() => { }}
                    dataCount={1}
                    columns={[]}
                    data={[{
                        "id": "1",
                        "name": "Name"
                    }]}
                    filteredData={[]}
                    onSearch={() => { }}
                />
            </div>
            <div style={{ marginTop: 16 }}>
                <PageStep
                    id={"1"} steps={[]} currentStep={null}
                />
            </div>
            <div style={{ marginTop: 16 }}>
                <PageTitle>PageTitle</PageTitle>
            </div>
            <div style={{ marginTop: 16 }}>
                <PageTitleMid>PageTitleMid</PageTitleMid>
            </div>
            <div style={{ marginTop: 16 }}>
                <PanelBase><div>PanelBase</div></PanelBase>
            </div>
            <div style={{ marginTop: 16 }}>
                <ReportApprovedDoc />
            </div>
            <div style={{ marginTop: 16 }}>
                <ReportDoc />
            </div>
            <div style={{ marginTop: 16 }}>
                <ReportFolder />
            </div>
            <div style={{ marginTop: 16 }}>
                <Step data={[]} />
            </div>
            <div style={{ marginTop: 16 }}>
                <TextGridHeader value="TextGridHeader" />
            </div>
            <div style={{ marginTop: 16 }}>
                <TextTitle value="TextGridHeader" />
            </div>
            <div style={{ marginTop: 16 }}>
                <Warning value="Warning" />
            </div>
        </div>
    )
}
export default App