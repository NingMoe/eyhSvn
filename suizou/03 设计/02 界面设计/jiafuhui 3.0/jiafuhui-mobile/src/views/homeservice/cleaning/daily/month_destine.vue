<template>
<div class="destine">
	<address-panel :list="address_list" :select_address="select_address"></address-panel>
	<flexbox>
		<flexbox-item class="vux-1px-r"><div class="flex-demo">
			<i slot="icon" class="icon icon-calendar"></i>
			<datetime title=""format="YYYY-MM-DD" value="2016-07-10" format="HH:mm" confirm-text="确认" cancel-text="取消"><i slot="icon"></i></datetime>
		</div></flexbox-item>
		<flexbox-item>
			<div class="flex-demo">
		    	<i slot="icon" class="icon icon-clock-o"></i>
				<datetime title="" value="00:00" format="HH:mm" confirm-text="确认" cancel-text="取消"><i slot="icon"></i></datetime>
			</div>
		</flexbox-item>
	</flexbox>
	<group class="area">
		<div class="choose-area"><selector title="房屋面积" placeholder="" :value.sync="area" :options="area_list" @on-change="onChooseArea"></selector><span class="pf">平方</span></div>
	</group>
	<div class="opt">
		<span class="title">包月选择</span>
		<checker default-item-class="demo1-item" selected-item-class="demo1-item-selected">
		  <checker-item value="1">1个月<i class="icon icon-check-square"></i></checker-item>
		  <checker-item value="2">3个月<i class="icon icon-check-square"></i></checker-item>
		  <checker-item value="3">6个月<i class="icon icon-check-square"></i></checker-item>
		  <checker-item value="4">12个月<i class="icon icon-check-square"></i></checker-item>
		</checker>
	</div>
	<group title="更多需求：" class="textarea">
	  <x-textarea :max="200" placeholder="请输入详细描述"></x-textarea>
	</group>
	<div class="serve">服务费：<div><span>40</span>.00元</div></div>
	<div class="agree" @click="onCheck"><i class="icon-check-circle" v-if="checked == true"></i><i class="icon-check-circle-o" v-else></i> 同意《家服汇服务协议》</div>
	<div class="btn-panel">
      <x-button type="primary"style="background:#51AAFE;" v-link="'/cleaning/daily/month_pay'">下一步</x-button>
    </div>
</div>
</template>

<script>
	import Group from 'vux/src/components/group'
	import Datetime from 'vux/src/components/datetime'
	import Flexbox from 'vux/src/components/flexbox'
	import FlexboxItem from 'vux/src/components/flexbox-item'
	import Checker from 'vux/src/components/checker'
	import CheckerItem from 'vux/src/components/checker-item'
	import XTextarea from 'vux/src/components/x-textarea'
	import XButton from 'vux/src/components/x-button'
	import XInput from 'vux/src/components/x-input'
	import Selector from 'vux/src/components/selector'
	import AddressPanel from 'components/address-panel'

	export default {
	  data () {
	    return {
	      area: '60-80平米',
	      area_list: ['60-80平米', '81-100平米', '101-120平米', '121-150平米'],
	      checked: false,
	      address_list: [],
	      select_address: null
	    }
	  },
	  ready () {
	    document.title = '服务预定'
	    // 获取用户地址信息
	    this.$http.get('/static/data/address.json').then((response) => {
	      this.$progress.finish()
	      this.address_list = response.data
	      for (let item of this.address_list) {
	        if (item.isdefault) {
	          this.select_address = item
	          return
	        }
	      }
	    }, (response) => {
	      this.$progress.failed()
	    })
	  },
	  components: {
	    Group,
	    Flexbox,
	    FlexboxItem,
	    Datetime,
	    Checker,
	    CheckerItem,
	    XTextarea,
	    XButton,
	    XInput,
	    AddressPanel,
	    Selector
	  },
	  methods: {
	    onCheck: function () {
	      if (this.checked) {
	        this.checked = false
	      } else {
	        this.checked = true
	      }
	    },
	    onChooseArea: function () {
	      console.log(this.area)
	    }
	  }
	}
</script>