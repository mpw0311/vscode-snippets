# iview-snippet-extend SNIPPETS
> 

# iview
> iview 组件库 snippets

| Snippet    |   Type   | Purpose       |
| :--------- | :------: | :------------ |
|`iRow` 或 `i-row`|vue-html|`<Row> <Col span="$1">  </Col> <Col span="$2">  </Col> </Row>`|
|`iCol` 或 `i-col`|vue-html|`<Col span="$1"> $2 </Col>`|
|`iIcon` 或 `i-icon`|vue-html|`<Icon type="$1" />`|
|`iCard` 或 `i-card`|vue-html|`<Card><p slot="title">$1</p></Card>`|
|`iButton` 或 `i-button`|vue-html|`<Button type="${1:primary}">$2</Button>`|
|`iButtonGroup` 或 `i-button-group`|vue-html|`<ButtonGroup><Button>Cancel</Button> <Button type="${1:primary}">$2</Button></ButtonGroup>`|
|`iInput` 或 `i-input`|vue-html|`<Input v-model="${1}" placeholder="${2}"></Input>`|
|`iInputnumber` 或 `i-input-number`|vue-html|`<Input-number :max="${1:10}" :min="${2:1}" v-model="${3:model}"></Input-number>`|
|`iTable` 或 `i-table`|vue-html|`<Table :columns="${1:column}" :data="${2:data}"></Table>`|
|`iSelect` 或 `i-select`|vue-html|`<Select v-model="${1:model}"> <Option v-for="${2:item} in ${3:list}" :value="${4:value}" :key="item">${5}</Option> </Select>`|
|`iDatepicker` 或 `i-datepicker`|vue-html|`<Date-picker type="datetime" format="yyyy/MM/dd HH:mm" placeholder="选择日期和时间"></Date-picker>`|
|`iUpload` 或 `i-upload`|vue-html|`<Upload action="${1}"> <Button type="ghost" icon="ios-cloud-upload-outline">上传文件</Button> </Upload>`|
|`iMessage` 或 `i-message`|vue-html|`this.$$Message.info('${1}');`|
|`iNotice` 或 `i-notice`|vue-html|`this.$$Notice.open({title: '',desc: ''});`|
|`iForm` 或 `i-form`|vue-html|`<Form ref="${1}" :model="${2}" :rules="${3}" :label-width="120" inline><FormItem label="${4}">${5}</FormItem></Form>`|
|`iModal` 或 `i-modal`|vue-html|`<Modalv-model="${1}"title="${2}">${3}</Modal>`|
|`iRadio` 或 `i-radio`|vue-html|`<Radio v-model="${1}">${2}</Radio>`|
|`iRadioGroup` 或 `i-radio-group`|vue-html|`<RadioGroup v-model="${1}"><Radio label="${2}"></Radio><Radio label="${3}"></Radio></RadioGroup>`|
|`iCheckBox` 或 `i-check-box`|vue-html|`<Checkbox v-model="${1}">${2}</Checkbox>`|
|`iCheckboxGroup` 或 `i-checkbox-group`|vue-html|`<CheckboxGroup v-model="${1}"><Checkbox label="${2}"></Checkbox><Checkbox label="${3}"></Checkbox></CheckboxGroup>`|,# vue
> iview 代码片段

| Snippet    |   Type   | Purpose       |
| :--------- | :------: | :------------ |
|`iRow` 或 `i-row`|vue-html|`<Row> <Col span="$1">  </Col> <Col span="$2">  </Col> </Row>`|
|`iCol` 或 `i-col`|vue-html|`<Col span="$1"> $2 </Col>`|
|`iIcon` 或 `i-icon`|vue-html|`<Icon type="$1" />`|
|`iCard` 或 `i-card`|vue-html|`<Card><p slot="title">$1</p></Card>`|
|`iButton` 或 `i-button`|vue-html|`<Button type="${1:primary}">$2</Button>`|
|`iButtonGroup` 或 `i-button-group`|vue-html|`<ButtonGroup><Button>Cancel</Button> <Button type="${1:primary}">$2</Button></ButtonGroup>`|
|`iInput` 或 `i-input`|vue-html|`<Input v-model="${1}" placeholder="${2}"></Input>`|
|`iInputnumber` 或 `i-input-number`|vue-html|`<Input-number :max="${1:10}" :min="${2:1}" v-model="${3:model}"></Input-number>`|
|`iTable` 或 `i-table`|vue-html|`<Table :columns="${1:column}" :data="${2:data}"></Table>`|
|`iSelect` 或 `i-select`|vue-html|`<Select v-model="${1:model}"> <Option v-for="${2:item} in ${3:list}" :value="${4:value}" :key="item">${5}</Option> </Select>`|
|`iDatepicker` 或 `i-datepicker`|vue-html|`<Date-picker type="datetime" format="yyyy/MM/dd HH:mm" placeholder="选择日期和时间"></Date-picker>`|
|`iUpload` 或 `i-upload`|vue-html|`<Upload action="${1}"> <Button type="ghost" icon="ios-cloud-upload-outline">上传文件</Button> </Upload>`|
|`iMessage` 或 `i-message`|vue-html|`this.$$Message.info('${1}');`|
|`iNotice` 或 `i-notice`|vue-html|`this.$$Notice.open({title: '',desc: ''});`|
|`iForm` 或 `i-form`|vue-html|`<Form ref="${1}" :model="${2}" :rules="${3}" :label-width="120" inline><FormItem label="${4}">${5}</FormItem></Form>`|
|`iModal` 或 `i-modal`|vue-html|`<Modalv-model="${1}"title="${2}">${3}</Modal>`|
|`iRadio` 或 `i-radio`|vue-html|`<Radio v-model="${1}">${2}</Radio>`|
|`iRadioGroup` 或 `i-radio-group`|vue-html|`<RadioGroup v-model="${1}"><Radio label="${2}"></Radio><Radio label="${3}"></Radio></RadioGroup>`|
|`iCheckBox` 或 `i-check-box`|vue-html|`<Checkbox v-model="${1}">${2}</Checkbox>`|
|`iCheckboxGroup` 或 `i-checkbox-group`|vue-html|`<CheckboxGroup v-model="${1}"><Checkbox label="${2}"></Checkbox><Checkbox label="${3}"></Checkbox></CheckboxGroup>`|
|`i-formItem-input`|vue-html|`<FormItem label="$1" prop="$2"> <Input v-model="$3" class="input-select" placeholder="请输入" /> </FormItem>`|
|`i-formItem-select`|vue-html|`<FormItem label="$1" prop="$2"> <Select v-model="$3" class="input-select" placeholder="请选择" clearable> <Option v-for="item in []" :value="item.value" :key="item.value">{{ item.label }}</Option> </Select> </FormItem>`|
|`i-formItem-datePicker`|vue-html|`<FormItem label="$1" prop="$2"> <DatePicker v-model="$3" type="daterange" class="input-select" placeholder="请选择" /> </FormItem>`|