<template>
    <modal name="filter1" height="auto" class="mymodal">
        <p style="text-align: center; padding: 20px; font-weight: bold;">Filter</p>
        <div class="row" style="min-height: 310px;">
            <div class="col-md-6">

                <p style="text-align: center">
                    <input type="checkbox" v-model="group" @change="filterUpdate()" value="group"> Group
                </p>

                <div class="group" style="padding: 0" :class="group ? '' : 'group_block'">
                    <div class="group">
                        <p v-if="countryAvailable">
                            <input type="checkbox" v-model="country" @change="filterUpdate()"> Country
                        </p>
                        <select v-if="countryAvailable" :disabled="!country" v-model="selectedCountry" @change="filterUpdate()">
                            <option v-for="item in countryList" :key="item">{{item}}</option>
                        </select>

                        <p v-if="cityAvailable">
                            <input type="checkbox" v-model="city" @change="filterUpdate()"> City
                        </p>
                        <select v-if="cityAvailable" :disabled="!city"  v-model="selectedCity" @change="filterUpdate()">
                          <option v-for="item in cityList" :key="item">{{item}}</option>
                        </select>
                    </div>
                    <p style="text-align: center">
                        <input type="checkbox" v-model="s_group"  @change="filterUpdate()"> Specific Groups
                    </p>
                    <div class="group" :class="s_group ? '' : 'group_block'">
                        <ul class="group_id_list" @change="filterUpdate()">

                        <li v-for="item in groupIdList" :key="item.group_id">
                            <input :value="item.group_id" v-model="selected_groups" type="checkbox" > {{item.group_id}}
                        </li>

                        </ul>
                        <button class="btn btn-info" @click="selectAll(false)" style="margin-right: 3px">Unselect All</button>
                        <button class="btn btn-info" @click="selectAll(true)">Select All</button>
                    </div>

                </div>

            </div>
            <div class="col-md-6">
                <p style="text-align: center">
                    <input type="checkbox" v-model="student" @change="filterUpdate()"> Student
                </p>

                <div class="group" :class="student ? '' : 'group_block'">
                    <p v-if="ageAvailable">
                        <input v-model="age" type="checkbox" @change="filterUpdate()"> Age
                    </p>
                    <p v-if="ageAvailable">
                        Min <input :class="MinError ? 'error': ''" type="number" @change="filterUpdate()" @keyup="limitCheck()"  :min="limit_min" :max="max_age" v-model="min_age" :disabled="!age"  style="width: 50px">

                        Max <input :class="MaxError ? 'error': ''" type="number"  @change="filterUpdate()" @keyup="limitCheck()"   :max="limit_max" :min="min_age" v-model="max_age" :disabled="!age" style="width: 50px">
                        <br/><span v-if="(MinError || MaxError)">Age Limit: {{limit_min}} - {{limit_max}}</span>
                    </p>

                    <p v-if="sexAvailable">
                        <input type="checkbox" v-model="sex" @change="filterUpdate()"> Gender
                    </p>

                    <select v-if="sexAvailable" v-model="selected_sex" :disabled="!sex" @change="filterUpdate()">
                        <option v-for="item in sex_list" :key="item" :value="item">{{item}}</option>
                    </select>

                    <p v-if="studentAvailable">
                        <input type="checkbox" v-model="studentCode" @change="filterUpdate()"> Student Code
                    </p>

                    <select v-if="studentAvailable" v-model="selected_student" :disabled="!studentCode" @change="filterUpdate()">
                        <option v-for="item in student_list" :key="item" :value="item">{{item}}</option>
                    </select>

                </div>

            </div>

        </div>
      <div class="btngroup text-right m-3">
        <button class="btn btn-outline-primary" @click="close()">Back</button>
        <button class="btn btn-success offset-1" :disabled="(MinError || MaxError) && this.age" @click="filter()">Filter</button>
      </div>
    </modal>
</template>

<script>
    export default {
      data: function () {
        return {
          error: false,
          s_group: false,
          country: false,
          city: false,
          group: false,
          age: false,
          sex: false,
          studentCode: false,
          student: false,
          min_age: '',
          max_age: '',
          MinError: false,
          MaxError: false,

          selected_sex: 'Male',
          selected_student: null,
          selected_groups: [],
          countryList: [],
          cityList: [],
          groupIdList: [],
          limit_min: 0,
          limit_max: 100,
          filterHeader: {},
          selectedCountry: '',
          selectedCity: '',
          type: false,
          sex_list: [],
          student_list: [],

          ageAvailable: false,
          sexAvailable: false,
          studentAvailable: false,
          countryAvailable: false,
          cityAvailable: false
        };
      },
      mounted(){
        this.$root.$on("processFilters", () => {
            let Filter = this.$store.state.availableFilters;

            if(Filter[0].filters !== undefined) {

              for (let i = 0; i < Filter[0].filters.length; i++) {
                let actFilter = Filter[0].filters[i]

                if (actFilter.id == "city") {
                  this.cityAvailable = true;
                  this.cityList = actFilter.values;
                } else if (actFilter.id == "country") {
                  this.countryAvailable = true;
                  this.countryList = actFilter.values;
                } else {
                  console.error("unknown filter type: " + actFilter.id);
                }
              }
              this.groupIdList = Filter[0].group_ids;
            }
            if(Filter[1].filters !== undefined){

              for (let i = 0; i < Filter[1].filters.length; i++) {
                let actFilter = Filter[1].filters[i]

                if (actFilter.id == 'age')  {
                  this.ageAvailable = true;
                  this.limit_min = Math.min(...actFilter.values);
                  this.limit_max = Math.max(...actFilter.values);
                } else if (actFilter.id == "sex") {
                  this.sexAvailable = true;
                  this.sex_list = actFilter.values;
                } else if (actFilter.id == "studentCode") {
                  this.studentAvailable = true;
                  this.student_list = actFilter.values;
                } else {
                  console.error("unknown filter type: " + actFilter.id);
                }
              }
            }
        });
      }
      , methods:{
            close(){
                this.$modal.hide('filter1');
            },
            limitCheck(){

              if(parseInt(this.min_age) < this.limit_min || parseInt(this.min_age) > parseInt(this.max_age))
              {
                this.MinError = true;
              }else {
                this.MinError = false;
              }

              if(parseInt(this.max_age) > this.limit_max || parseInt(this.max_age) < parseInt(this.min_age))
              {
                this.MaxError = true;
              }else {
                this.MaxError = false;
              }


            },
            filter(){
              this.$modal.hide('filter1');
              this.$store.commit("changeFilter1", this.filterHeader);
              this.$root.$emit('updateData1');
            },
            filterUpdate(){
              this.filterHeader = {};
              if(this.group) {
                this.filterHeader['group'] = null;

                /*Add Country*/
                if(this.country) {
                 if(this.filterHeader['group'] === null)
                   this.filterHeader['group'] = [];
                 this.filterHeader['group'].push({"key":"country", "min_value": this.selectedCountry});
                }else if(this.filterHeader['group'] !== null){
                  /*Remove country*/
                  this.filterHeader['group'].filter(item => {
                    delete item.country
                  });
                }

                /*Add City*/
                if(this.city) {
                  if(this.filterHeader['group'] === null)
                    this.filterHeader['group'] = [];
                  this.filterHeader['group'].push({"key":"city", "min_value": this.selectedCity});
                }else if(this.filterHeader['group'] !== null){
                  //remove city
                  this.filterHeader['group'].filter(item => {
                    delete item.city
                  });
                }



                /*Add Group Id*/
                if(this.s_group) {
                  if(this.filterHeader['group'] === null)
                    this.filterHeader['group'] = [];
                  this.selected_groups.forEach((value) => {
                    this.filterHeader['group'].push({"key": "group_id", "min_value": value});
                  });


                }else if(this.filterHeader['group'] !== null){
                  //remove city
                  this.filterHeader['group'].filter(item => {
                    delete item.groups
                  });
                }



              }
              else {
                delete this.filterHeader.group;
              }

              if(this.student){
                this.filterHeader['student'] = null;

                /*Add Age*/
                if(this.age) {

                  if(this.filterHeader['student'] === null)
                    this.filterHeader['student'] = [];
                  this.filterHeader['student'].push({"key": "age", "min_value": this.min_age, "max_value": this.max_age});

                }else if(this.filterHeader['student'] !== null){
                  //remove age
                  this.filterHeader['student'].filter(item => {
                      delete item.age
                  });
                }

                /*Add Age*/
                if(this.sex) {

                  if(this.filterHeader['student'] === null)
                    this.filterHeader['student'] = [];
                  this.filterHeader['student'].push({"key" : "sex", "min_value" : this.selected_sex});

                }else if(this.filterHeader['student'] !== null){
                  //remove city
                  this.filterHeader['student'].filter(item => {
                    delete item.sex
                  });
                }

                /*Add student code*/
                if (this.studentCode) {
                  if(this.filterHeader['student'] === null)
                    this.filterHeader['student'] = [];

                  this.filterHeader['student'].push({"key" : "studentCode", "min_value" : this.selected_student});
                } else if (this.filterHeader['student'] !== null) {
                  this.filterHeader['student'].filter(item => {
                    delete item.studentCode
                  });
                }
              }else{
                delete this.filterHeader.student;
              }
            },
            selectAll(value) {
            var selected = [];

            if (value) {
              this.groupIdList.forEach(function (item) {
                selected.push(item.group_id);
              });
            }

            this.selected_groups = selected;
            this.filterUpdate();
          }
        }

    }
</script>

<style scoped lang="scss">
    .group{
        border: 1px solid gray;
        margin: 10px;
        padding: 10px;
        position: relative;
      .group_id_list{
        list-style: none;
        margin: 8px 0px;
        padding: 0px;
        max-height: 120px;
        overflow-y: auto;
        li{
          padding: 7px 0;
          margin: 0;
        }
      }
    }
    .group_block::after{
      content: "";
      position: absolute;
      width: 100%;
      height: 100%;
      display: block;
      background: #a5a5a547;
      top: 0;
      left: 0;
      z-index: 9999;
    }

    .vm--modal {
      left: 0 !important;
      width: 100% !important;
      overflow-y: auto !important;
      max-height: 600px !important;
    }

      input.error {
        border: 1px solid red;
        color: red;
      }


</style>
