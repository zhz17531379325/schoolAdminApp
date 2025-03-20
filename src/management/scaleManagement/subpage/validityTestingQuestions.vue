<template>
  <view class="validityTestingQuestions">
    <view class="questionList">
      <view
        class="questionItem"
        v-for="(item, index) in questionList"
        :key="index"
      >
        <view class="topic">{{ `${index + 1}. ` + item.title }}</view>
        <view class="answer">
          <div
            class="answerItem"
            v-for="(answer, answerIndex) in item.options"
            :key="answerIndex"
          >
            <view class="option">{{ answer.content }}：</view>
            <view class="scoreValue">{{ answer.score }}分</view>
          </div>
        </view>
      </view>
    </view>
  </view>
</template>

<script setup name="validityTestingQuestions">
const questionList = ref([
  {
    questionId: '233394110178944661687433122550029742431',
    title: '我从来没有生病过，甚至最轻微的感冒。',
    index: 0,
    dimensionName: '效度',
    options: [
      {
        id: '225261922631680629065368963639349233821',
        optionIndex: 'A',
        content: '是',
        score: 1,
      },
      {
        id: '310657443222945255132008629834978677550',
        optionIndex: 'B',
        content: '否',
        score: 0,
      },
    ],
  },
  {
    questionId: '299638399943984578092102975914429884170',
    title: ' 我从来没有打伞过。',
    index: 0,
    dimensionName: '效度',
    options: [
      {
        id: '209626613581865411806655639917555881461',
        optionIndex: 'A',
        content: '是',
        score: 1,
      },
      {
        id: '47906616897653532749243735203760746648',
        optionIndex: 'B',
        content: '否',
        score: 0,
      },
    ],
  },
  {
    questionId: '134875062493906302832949054131885272321',
    title: '我记得自己的名字。',
    index: 0,
    dimensionName: '效度',
    options: [
      {
        id: '273603743758685745999251690918663332827',
        optionIndex: 'A',
        content: '是',
        score: 0,
      },
      {
        id: '57120185023539040128631460819161954856',
        optionIndex: 'B',
        content: '否',
        score: 1,
      },
    ],
  },
  {
    questionId: '337391939978817083734577595645935236635',
    title: '你是否有过在太空中行走的经历？',
    index: 0,
    dimensionName: '效度',
    options: [
      {
        id: '283938228688375705576793560444514910304',
        optionIndex: 'A',
        content: '是',
        score: 1,
      },
      {
        id: '53066361915772424964311064440476546585',
        optionIndex: 'B',
        content: '否',
        score: 0,
      },
    ],
  },
  {
    questionId: '117205256762685720301321845049519723219',
    title: '你通常如何在一天中保持清醒？',
    index: 0,
    dimensionName: '效度',
    options: [
      {
        id: '198904755373436447876159539665668120165',
        optionIndex: 'A',
        content: '我不需要保持清醒',
        score: 1,
      },
      {
        id: '324725694278177773348051778400620250529',
        optionIndex: 'B',
        content: '通过适当的休息和饮食',
        score: 0,
      },
    ],
  },
  {
    questionId: '187451486506358589634485183690110672017',
    title: '我会睡觉。',
    index: 0,
    dimensionName: '效度',
    options: [
      {
        id: '63357350304612707133848885041629696976',
        optionIndex: 'A',
        content: '是',
        score: 0,
      },
      {
        id: '186312854995132712719278695772192319581',
        optionIndex: 'B',
        content: '否',
        score: 1,
      },
    ],
  },
  {
    questionId: '95843306034587401513638192705652759909',
    title: '你是否曾与恐龙共舞？',
    index: 0,
    dimensionName: '效度',
    options: [
      {
        id: '316510982663064317139991671583694875252',
        optionIndex: 'A',
        content: '是',
        score: 1,
      },
      {
        id: '217123491460683527794188404257397431206',
        optionIndex: 'B',
        content: '否',
        score: 0,
      },
    ],
  },
  {
    questionId: '265606397085317083247188517511768554129',
    title: '我认真完成了本次问卷。',
    index: 0,
    dimensionName: '效度',
    options: [
      {
        id: '281863070035588777686776349903955367020',
        optionIndex: 'A',
        content: '是',
        score: 0,
      },
      {
        id: '52119334128864800536030454928022426536',
        optionIndex: 'B',
        content: '否',
        score: 1,
      },
    ],
  },
  {
    questionId: '41384542239630621490190497306586893179',
    title: '我从不生气。',
    index: 0,
    dimensionName: '效度',
    options: [
      {
        id: '154121965441060881191440173864782331216',
        optionIndex: 'A',
        content: '是',
        score: 1,
      },
      {
        id: '293750016085537038134471524273173893658',
        optionIndex: 'B',
        content: '否',
        score: 0,
      },
    ],
  },
  {
    questionId: '82002532054735325010097342772558625322',
    title: '我每天撒谎',
    index: 0,
    dimensionName: '效度',
    options: [
      {
        id: '311508548289836371465881910184467075257',
        optionIndex: 'A',
        content: '是',
        score: 1,
      },
      {
        id: '8393767900766833475701367766784717491',
        optionIndex: 'B',
        content: '否',
        score: 0,
      },
    ],
  },
  {
    questionId: '284153433146856177078539562101380678899',
    title: '我每天都吃饭。',
    index: 0,
    dimensionName: '效度',
    options: [
      {
        id: '247777869635213685935698804319053235020',
        optionIndex: 'A',
        content: '是',
        score: 0,
      },
      {
        id: '94732061516887726513082970457032198347',
        optionIndex: 'B',
        content: '否',
        score: 1,
      },
    ],
  },
  {
    questionId: '296066180059202694543650322783546285831',
    title: '现实生活中我不认识任何人。',
    index: 0,
    dimensionName: '效度',
    options: [
      {
        id: '130440414236603428391973277164676881350',
        optionIndex: 'A',
        content: '是',
        score: 1,
      },
      {
        id: '140284170681804215041437660147255958916',
        optionIndex: 'B',
        content: '否',
        score: 0,
      },
    ],
  },
  {
    questionId: '285180890450001697416263239302824569724',
    title: '我从来没有生病过，甚至最轻微的感冒。',
    index: 0,
    dimensionName: '效度',
    options: [
      {
        id: '124005239410892983601343807424021699545',
        optionIndex: 'A',
        content: '完全符合',
        score: 1,
      },
      {
        id: '58876555399053425273935020015720730921',
        optionIndex: 'B',
        content: '部分符合',
        score: 1,
      },
      {
        id: '274754633526643080115521176512944998560',
        optionIndex: 'C',
        content: '不符合',
        score: 0,
      },
    ],
  },
  {
    questionId: '125644750522605612050205140012021128446',
    title: '你通常如何在一天中保持清醒？',
    index: 0,
    dimensionName: '效度',
    options: [
      {
        id: '101704057454254159937603855778099040032',
        optionIndex: 'A',
        content: '我不需要保持清醒',
        score: 1,
      },
      {
        id: '289584539652444125697189065793054818365',
        optionIndex: 'B',
        content: '合理饮食和足够的睡眠',
        score: 0,
      },
      {
        id: '6323898716077519445820250179185054511',
        optionIndex: 'C',
        content: '通过吃很多糖',
        score: 1,
      },
    ],
  },
  {
    questionId: '96487650576909271151488281422736256993',
    title: '我记得自己的名字。',
    index: 0,
    dimensionName: '效度',
    options: [
      {
        id: '97487168944182356824419846713978394798',
        optionIndex: 'A',
        content: '完全符合',
        score: 0,
      },
      {
        id: '25228586096302512736407058535670368604',
        optionIndex: 'B',
        content: '部分符合',
        score: 1,
      },
      {
        id: '31982183389458196405366814721202956166',
        optionIndex: 'C',
        content: '不符合',
        score: 1,
      },
    ],
  },
  {
    questionId: '207576035227410511142481225562443197728',
    title: '你是否有过在太空中行走的经历？',
    index: 0,
    dimensionName: '效度',
    options: [
      {
        id: '285659729235815947037259884694236147755',
        optionIndex: 'A',
        content: '完全符合',
        score: 1,
      },
      {
        id: '179770871702831943666807843020566065995',
        optionIndex: 'B',
        content: '部分符合',
        score: 1,
      },
      {
        id: '92769631434230376850777700523094023051',
        optionIndex: 'C',
        content: '不符合',
        score: 0,
      },
    ],
  },
  {
    questionId: '99747148759121736504278117961746266987',
    title: '我每天都睡觉。',
    index: 0,
    dimensionName: '效度',
    options: [
      {
        id: '102231977991156226629107250261280795697',
        optionIndex: 'A',
        content: '完全符合',
        score: 0,
      },
      {
        id: '337759141683950803410947705247606097717',
        optionIndex: 'B',
        content: '部分符合',
        score: 1,
      },
      {
        id: '197401584309843225872135678540414244867',
        optionIndex: 'C',
        content: '不符合',
        score: 1,
      },
    ],
  },
  {
    questionId: '336919501878221554038108210857358925867',
    title: '你是否曾与恐龙共舞？',
    index: 0,
    dimensionName: '效度',
    options: [
      {
        id: '135741456303167642702254372035096619528',
        optionIndex: 'A',
        content: '经常',
        score: 1,
      },
      {
        id: '126532743636429886980868516189358185086',
        optionIndex: 'B',
        content: '偶尔',
        score: 1,
      },
      {
        id: '22516422055044617864252980265611831853',
        optionIndex: 'C',
        content: '没有',
        score: 0,
      },
    ],
  },
  {
    questionId: '9082478378161540141027203979088130154',
    title: '我认真完成了本次问卷。',
    index: 0,
    dimensionName: '效度',
    options: [
      {
        id: '100602221095848704570201460972218358624',
        optionIndex: 'A',
        content: '完全符合',
        score: 0,
      },
      {
        id: '109404908313719476761354634057186868316',
        optionIndex: 'B',
        content: '部分符合',
        score: 1,
      },
      {
        id: '109620443411564303411542295740446301714',
        optionIndex: 'C',
        content: '不符合',
        score: 1,
      },
    ],
  },
  {
    questionId: '241362327447943442781216522952357787137',
    title: '我每天都在生气。',
    index: 0,
    dimensionName: '效度',
    options: [
      {
        id: '14336151046593889733427457270393318372',
        optionIndex: 'A',
        content: '完全符合',
        score: 1,
      },
      {
        id: '237947921191656842826141283891108659282',
        optionIndex: 'B',
        content: '部分符合',
        score: 1,
      },
      {
        id: '243170089630605955268943220054390510246',
        optionIndex: 'C',
        content: '不符合',
        score: 0,
      },
    ],
  },
  {
    questionId: '9539228499061828241176375748176347898',
    title: '当你感到口渴时，你通常会做什么？',
    index: 0,
    dimensionName: '效度',
    options: [
      {
        id: '66961959023879345702205034764037663490',
        optionIndex: 'A',
        content: '玩游戏',
        score: 1,
      },
      {
        id: '264771416339385093557432427127359523487',
        optionIndex: 'B',
        content: '喝水',
        score: 0,
      },
      {
        id: '203912215807901711589291961315974730373',
        optionIndex: 'C',
        content: '吃香蕉',
        score: 1,
      },
    ],
  },
  {
    questionId: '324433673728725533187785154651803403947',
    title: '我每天都吃饭。',
    index: 0,
    dimensionName: '效度',
    options: [
      {
        id: '203349975682544308720622926895385228084',
        optionIndex: 'A',
        content: '完全符合',
        score: 0,
      },
      {
        id: '69207992890366896734940981815858736021',
        optionIndex: 'B',
        content: '部分符合',
        score: 1,
      },
      {
        id: '106458259610856174650066243009837304238',
        optionIndex: 'C',
        content: '不符合',
        score: 1,
      },
    ],
  },
  {
    questionId: '152639730972338448218972963616986456719',
    title: '现实生活中我不认识任何人。',
    index: 0,
    dimensionName: '效度',
    options: [
      {
        id: '3581142261177425701945784344059811841',
        optionIndex: 'A',
        content: '完全符合',
        score: 1,
      },
      {
        id: '129542659009040727149917191762342637364',
        optionIndex: 'B',
        content: '部分符合',
        score: 1,
      },
      {
        id: '223400976261073648222619604208949620159',
        optionIndex: 'C',
        content: '不符合',
        score: 0,
      },
    ],
  },
  {
    questionId: '9042424739339249530057248911712478574',
    title: '我从来没有生病过，甚至最轻微的感冒。',
    index: 0,
    dimensionName: '效度',
    options: [
      {
        id: '125371275080625934647434608798718067681',
        optionIndex: 'A',
        content: '完全不符合',
        score: 0,
      },
      {
        id: '43386825753986782080865259089069691844',
        optionIndex: 'B',
        content: '部分不符合',
        score: 1,
      },
      {
        id: '199988277655779045887746442011253033781',
        optionIndex: 'C',
        content: '部分符合',
        score: 1,
      },
      {
        id: '203881219635925578505451689098681580806',
        optionIndex: 'D',
        content: '完全符合',
        score: 1,
      },
    ],
  },
  {
    questionId: '286904713358369939529211534776444117392',
    title: '你通常如何在一天中保持清醒？',
    index: 0,
    dimensionName: '效度',
    options: [
      {
        id: '310121545853946426403507148130057157006',
        optionIndex: 'A',
        content: '我不需要保持清醒',
        score: 1,
      },
      {
        id: '305546510810673581731836306054941795175',
        optionIndex: 'B',
        content: '通过长期熬夜',
        score: 1,
      },
      {
        id: '108902770137627526368240775747660366798',
        optionIndex: 'C',
        content: '通过适当的休息和饮食',
        score: 0,
      },
      {
        id: '227874180398447914613147848486652208774',
        optionIndex: 'D',
        content: '通过吃大量的糖',
        score: 1,
      },
    ],
  },
  {
    questionId: '187028189021214030346624188246984070827',
    title: '我记得自己的名字。',
    index: 0,
    dimensionName: '效度',
    options: [
      {
        id: '291169902961374399751719606586841560316',
        optionIndex: 'A',
        content: '完全记得',
        score: 1,
      },
      {
        id: '39224338027873337096540277277973284159',
        optionIndex: 'B',
        content: '部分不记得',
        score: 1,
      },
      {
        id: '276789405989016444745370177522532350005',
        optionIndex: 'C',
        content: '部分记得',
        score: 1,
      },
      {
        id: '69944772541571486970230870410953030133',
        optionIndex: 'D',
        content: '完全记得',
        score: 0,
      },
    ],
  },
  {
    questionId: '337974397251027577601695604126196313810',
    title: '你是否有过在太空中行走的经历？',
    index: 0,
    dimensionName: '效度',
    options: [
      {
        id: '12394311531359843878957031853708985227',
        optionIndex: 'A',
        content: '从没',
        score: 0,
      },
      {
        id: '201815585007162440826028560920747403763',
        optionIndex: 'B',
        content: '偶尔',
        score: 1,
      },
      {
        id: '285014836942776628786342586285859893341',
        optionIndex: 'C',
        content: '经常',
        score: 1,
      },
      {
        id: '309843785543281203590157423355454884962',
        optionIndex: 'D',
        content: '每天',
        score: 1,
      },
    ],
  },
  {
    questionId: '288481530038369708070412966884066950750',
    title: '我每天都睡觉。',
    index: 0,
    dimensionName: '效度',
    options: [
      {
        id: '156568641045418342545262775860455889465',
        optionIndex: 'A',
        content: '完全不符合',
        score: 1,
      },
      {
        id: '60559174932852995115117410549988902903',
        optionIndex: 'B',
        content: '部分不符合',
        score: 1,
      },
      {
        id: '265671158661095170498950943193995985245',
        optionIndex: 'C',
        content: '部分符合',
        score: 1,
      },
      {
        id: '140730864683113781429961520976930514953',
        optionIndex: 'D',
        content: '完全符合',
        score: 0,
      },
    ],
  },
  {
    questionId: '163981504012068128984715935640168515444',
    title: '你是否曾与恐龙共舞？',
    index: 0,
    dimensionName: '效度',
    options: [
      {
        id: '247136673178078401632794605526621734376',
        optionIndex: 'A',
        content: '很多次',
        score: 1,
      },
      {
        id: '249957962418035476657312694427777285772',
        optionIndex: 'B',
        content: '偶尔',
        score: 1,
      },
      {
        id: '238490928838149765772171711203109036720',
        optionIndex: 'C',
        content: '没有',
        score: 0,
      },
      {
        id: '70162921816157390846708255744208135689',
        optionIndex: 'D',
        content: '不记得了',
        score: 1,
      },
    ],
  },
  {
    questionId: '106740815255084435356526178706928912784',
    title: '我认真完成了本次问卷。',
    index: 0,
    dimensionName: '效度',
    options: [
      {
        id: '101653418236843445434502462015549906571',
        optionIndex: 'A',
        content: '完全不符合',
        score: 1,
      },
      {
        id: '82222015296489097710761432878912358362',
        optionIndex: 'B',
        content: '部分不符合',
        score: 1,
      },
      {
        id: '266204744164318864479600926236920566312',
        optionIndex: 'C',
        content: '部分符合',
        score: 0,
      },
      {
        id: '292072051711786652198606262147941504221',
        optionIndex: 'D',
        content: '完全符合',
        score: 0,
      },
    ],
  },
  {
    questionId: '291524492300512439741050745472393314227',
    title: '当你感到口渴时，你通常会做什么？',
    index: 0,
    dimensionName: '效度',
    options: [
      {
        id: '63947702474242027433793850342962662107',
        optionIndex: 'A',
        content: '画画',
        score: 1,
      },
      {
        id: '136376224642121361598915875594985733188',
        optionIndex: 'B',
        content: '喝水',
        score: 0,
      },
      {
        id: '54398819854212473991071883299951040161',
        optionIndex: 'C',
        content: '跳舞',
        score: 1,
      },
      {
        id: '64525617412114591457555270156502147018',
        optionIndex: 'D',
        content: '玩游戏',
        score: 1,
      },
    ],
  },
  {
    questionId: '102954988415425211075728208318155469573',
    title: '我每天都在生气。',
    index: 0,
    dimensionName: '效度',
    options: [
      {
        id: '130051771401351545295871367632439902941',
        optionIndex: 'A',
        content: '完全不符合',
        score: 0,
      },
      {
        id: '327953850354331988566847046124878445513',
        optionIndex: 'B',
        content: '部分不符合',
        score: 1,
      },
      {
        id: '79580996293943351561842144669856100556',
        optionIndex: 'C',
        content: '部分符合',
        score: 1,
      },
      {
        id: '23499757955890347087667394976409438691',
        optionIndex: 'D',
        content: '完全符合',
        score: 1,
      },
    ],
  },
  {
    questionId: '152396429906368288463467817853736906412',
    title: '我每天都吃饭。',
    index: 0,
    dimensionName: '效度',
    options: [
      {
        id: '329700603960232460202720822550452874157',
        optionIndex: 'A',
        content: '完全不符合',
        score: 1,
      },
      {
        id: '263912382297852324516395933289408364810',
        optionIndex: 'B',
        content: '部分不符合',
        score: 1,
      },
      {
        id: '159194971785099127083051903698182157831',
        optionIndex: 'C',
        content: '部分符合',
        score: 0,
      },
      {
        id: '232846482411461189580304887942390080598',
        optionIndex: 'D',
        content: '完全符合',
        score: 0,
      },
    ],
  },
  {
    questionId: '25013485175789096232913875621854251263',
    title: '现实生活中我不认识任何人。',
    index: 0,
    dimensionName: '效度',
    options: [
      {
        id: '105237334437230617520370201683098961798',
        optionIndex: 'A',
        content: '完全不符合',
        score: 0,
      },
      {
        id: '261232220307226754041284760023243486600',
        optionIndex: 'B',
        content: '部分不符合',
        score: 1,
      },
      {
        id: '154228409746917166688753182093780049188',
        optionIndex: 'C',
        content: '部分符合',
        score: 1,
      },
      {
        id: '217837831604282005327411125557298959092',
        optionIndex: 'D',
        content: '完全符合',
        score: 1,
      },
    ],
  },
  {
    questionId: '25231166124569127873903243339080305035',
    title: '我从来没有生病过，甚至最轻微的感冒。',
    index: 0,
    dimensionName: '效度',
    options: [
      {
        id: '207403541971666025028653196332032449774',
        optionIndex: 'A',
        content: '完全不符合',
        score: 0,
      },
      {
        id: '286995552829955347344096165221731040382',
        optionIndex: 'B',
        content: '不太符合',
        score: 0,
      },
      {
        id: '282510560308048094918427725561415093416',
        optionIndex: 'C',
        content: '一般符合',
        score: 1,
      },
      {
        id: '91489999779171322222871645325329450753',
        optionIndex: 'D',
        content: '符合',
        score: 1,
      },
      {
        id: '175300200052892935144118864991921148793',
        optionIndex: 'E',
        content: '非常符合',
        score: 1,
      },
    ],
  },
  {
    questionId: '273800004536478761325565206964765689412',
    title: '你通常如何在一天中保持清醒？',
    index: 0,
    dimensionName: '效度',
    options: [
      {
        id: '56750652901661058353499970231035539542',
        optionIndex: 'A',
        content: '通过饮用咖啡',
        score: 0,
      },
      {
        id: '9289732536640744615233043278753038412',
        optionIndex: 'B',
        content: '通过适当的休息和饮食',
        score: 0,
      },
      {
        id: '246625326138292843297383758095353061776',
        optionIndex: 'C',
        content: '我不需要保持清醒',
        score: 1,
      },
      {
        id: '21318509469727012296184587451404786136',
        optionIndex: 'D',
        content: '通过长期熬夜',
        score: 1,
      },
      {
        id: '64988987412662629901387779398219184304',
        optionIndex: 'E',
        content: '通过吃大量的糖',
        score: 1,
      },
    ],
  },
  {
    questionId: '222473888697988590323371693128677483558',
    title: '我记得自己的名字。',
    index: 0,
    dimensionName: '效度',
    options: [
      {
        id: '293952042007153163120190026414000617790',
        optionIndex: 'A',
        content: '完全不符合',
        score: 1,
      },
      {
        id: '306918618338600294142875576798756401579',
        optionIndex: 'B',
        content: '不太符合',
        score: 1,
      },
      {
        id: '213487093862012598935521366388191381942',
        optionIndex: 'C',
        content: '一般符合',
        score: 0,
      },
      {
        id: '42891064922760007799512016161350341862',
        optionIndex: 'D',
        content: '符合',
        score: 0,
      },
      {
        id: '230387614704477109857231401629491797684',
        optionIndex: 'E',
        content: '非常符合',
        score: 0,
      },
    ],
  },
  {
    questionId: '68781870863061318502284490106638730744',
    title: '你是否有过在太空中行走的经历？',
    index: 0,
    dimensionName: '效度',
    options: [
      {
        id: '330106030021354651596718327540443238754',
        optionIndex: 'A',
        content: '经常',
        score: 1,
      },
      {
        id: '132425075271854355771373331233602381039',
        optionIndex: 'B',
        content: '偶尔',
        score: 1,
      },
      {
        id: '52217232630988790290817231397738583364',
        optionIndex: 'C',
        content: '很少',
        score: 1,
      },
      {
        id: '237554910749109598298347996597691042521',
        optionIndex: 'D',
        content: '没有',
        score: 0,
      },
      {
        id: '159844208404291007894999480816023593431',
        optionIndex: 'E',
        content: '不记得了',
        score: 1,
      },
    ],
  },
  {
    questionId: '17457274008896739265490225126715272920',
    title: '我每天都睡觉。',
    index: 0,
    dimensionName: '效度',
    options: [
      {
        id: '227054105665663379609012463934856669690',
        optionIndex: 'A',
        content: '完全不符合',
        score: 1,
      },
      {
        id: '9521207862300341544960152545887079999',
        optionIndex: 'B',
        content: '不太符合',
        score: 1,
      },
      {
        id: '48644189920412074176956438710084586312',
        optionIndex: 'C',
        content: '一般符合',
        score: 10,
      },
      {
        id: '114801005733530367618206541365891254635',
        optionIndex: 'D',
        content: '符合',
        score: 0,
      },
      {
        id: '158889443669049694241346112614767251216',
        optionIndex: 'E',
        content: '非常符合',
        score: 0,
      },
    ],
  },
  {
    questionId: '1255672661057063319453047734534241222',
    title: '你是否曾与恐龙共舞？',
    index: 0,
    dimensionName: '效度',
    options: [
      {
        id: '308343721684121928208674186447207540173',
        optionIndex: 'A',
        content: '每天',
        score: 1,
      },
      {
        id: '167695658824838270871608759441296096766',
        optionIndex: 'B',
        content: '很多次',
        score: 1,
      },
      {
        id: '47856824786686536043770359767491920390',
        optionIndex: 'C',
        content: '偶尔',
        score: 1,
      },
      {
        id: '185245247774933972755605559199680922444',
        optionIndex: 'D',
        content: '没有',
        score: 0,
      },
      {
        id: '163469441584520774654456580535904188195',
        optionIndex: 'E',
        content: '不记得了',
        score: 1,
      },
    ],
  },
  {
    questionId: '259574435979102001825899351801347793936',
    title: '我认真完成了本次问卷。',
    index: 0,
    dimensionName: '效度',
    options: [
      {
        id: '288410687703355117938669895896955931991',
        optionIndex: 'A',
        content: '完全不符合',
        score: 1,
      },
      {
        id: '86156826389318461243946653254944214458',
        optionIndex: 'B',
        content: '不太符合',
        score: 1,
      },
      {
        id: '329067502359783106512350574352030109473',
        optionIndex: 'C',
        content: '一般符合',
        score: 0,
      },
      {
        id: '136197776284073661924748003804159588527',
        optionIndex: 'D',
        content: '符合',
        score: 0,
      },
      {
        id: '166884707282798869193419411319039409353',
        optionIndex: 'E',
        content: '非常符合',
        score: 0,
      },
    ],
  },
  {
    questionId: '62627779353242840141134278161659431056',
    title: '我每天都在生气。',
    index: 0,
    dimensionName: '效度',
    options: [
      {
        id: '142896099742425742518507088717754959048',
        optionIndex: 'A',
        content: '完全不符合',
        score: 0,
      },
      {
        id: '197050371927003004581149199181707039895',
        optionIndex: 'B',
        content: '不太符合',
        score: 0,
      },
      {
        id: '178583908180590202127246086371007635088',
        optionIndex: 'C',
        content: '一般符合',
        score: 1,
      },
      {
        id: '94114107631419666085745204018453942176',
        optionIndex: 'D',
        content: '符合',
        score: 1,
      },
      {
        id: '46245962508468432008910170703801182846',
        optionIndex: 'E',
        content: '非常符合',
        score: 1,
      },
    ],
  },
  {
    questionId: '4006604482531710857524254924455946973',
    title: '当你感到口渴时，你通常会做什么？',
    index: 0,
    dimensionName: '效度',
    options: [
      {
        id: '14249962180614585864229283256283764410',
        optionIndex: 'A',
        content: '玩游戏',
        score: 1,
      },
      {
        id: '274319987847911202151910039152508049380',
        optionIndex: 'B',
        content: '跳舞',
        score: 1,
      },
      {
        id: '333135354078480526749813554025075120193',
        optionIndex: 'C',
        content: '喝水',
        score: 0,
      },
      {
        id: '156848988465923374299090149520444122418',
        optionIndex: 'D',
        content: '画画',
        score: 1,
      },
      {
        id: '150210136237790525469093529552206949695',
        optionIndex: 'E',
        content: '吃苹果',
        score: 0,
      },
    ],
  },
  {
    questionId: '314589836404374553016732021947479728431',
    title: '我每天都吃饭。',
    index: 0,
    dimensionName: '效度',
    options: [
      {
        id: '226336164986119313801960402455830359270',
        optionIndex: 'A',
        content: '完全不符合',
        score: 1,
      },
      {
        id: '290163622012102675532350185836411520421',
        optionIndex: 'B',
        content: '不太符合',
        score: 1,
      },
      {
        id: '197834909345493813089175811433197449849',
        optionIndex: 'C',
        content: '一般符合',
        score: 1,
      },
      {
        id: '134725643723727949817765075039232245034',
        optionIndex: 'D',
        content: '符合',
        score: 0,
      },
      {
        id: '226889772377207178432519067101204889494',
        optionIndex: 'E',
        content: '非常符合',
        score: 0,
      },
    ],
  },
  {
    questionId: '317692113476298139099163613246609262386',
    title: '现实生活中我不认识任何人。',
    index: 0,
    dimensionName: '效度',
    options: [
      {
        id: '242506029130678812635457316584204769070',
        optionIndex: 'A',
        content: '完全不符合',
        score: 0,
      },
      {
        id: '83513589172684788798746569883651682250',
        optionIndex: 'B',
        content: '很不符合',
        score: 0,
      },
      {
        id: '301910773093035528710133458497785834546',
        optionIndex: 'C',
        content: '一般符合',
        score: 1,
      },
      {
        id: '118193164560300601824673130281555070803',
        optionIndex: 'D',
        content: '符合',
        score: 1,
      },
      {
        id: '280430795433452825972679534750822201483',
        optionIndex: 'E',
        content: '非常符合',
        score: 1,
      },
    ],
  },
  {
    questionId: '86559457953656099380577368705250987645',
    title: '我从来没有生病过，甚至最轻微的感冒。',
    index: 0,
    dimensionName: '效度',
    options: [
      {
        id: '16267240921948807973476611399554805541',
        optionIndex: 'A',
        content: '完全不符合',
        score: 0,
      },
      {
        id: '217629994247207854933479744903963100862',
        optionIndex: 'B',
        content: '很不符合',
        score: 0,
      },
      {
        id: '277835110332505937613208154880790549485',
        optionIndex: 'C',
        content: '不太符合',
        score: 0,
      },
      {
        id: '6463279976644184628428007965113830571',
        optionIndex: 'D',
        content: '比较符合',
        score: 1,
      },
      {
        id: '10931805276993981430001345195198474631',
        optionIndex: 'E',
        content: '大部分符合',
        score: 1,
      },
      {
        id: '219964891849167987071879051434852380982',
        optionIndex: 'F',
        content: '完全符合',
        score: 1,
      },
    ],
  },
  {
    questionId: '230487963278761037286787264305672995500',
    title: ' 你通常如何在一天中保持清醒？',
    index: 0,
    dimensionName: '效度',
    options: [
      {
        id: '140567467530646860158546927405781217099',
        optionIndex: 'A',
        content: '通过适当的休息和饮食',
        score: 0,
      },
      {
        id: '43019750828270351035913884235889506422',
        optionIndex: 'B',
        content: '我不需要保持清醒',
        score: 1,
      },
      {
        id: '111432571703188088907382208420637839742',
        optionIndex: 'C',
        content: '通过长期熬夜',
        score: 1,
      },
      {
        id: '250600139068557441583708240041482015587',
        optionIndex: 'D',
        content: '咖啡可以是我清醒',
        score: 0,
      },
      {
        id: '166007591086031764673751103587975001279',
        optionIndex: 'E',
        content: '通过吃大量的糖',
        score: 1,
      },
      {
        id: '89542298891373089254258575627847682577',
        optionIndex: 'F',
        content: '不喝咖啡就可以清醒',
        score: 1,
      },
    ],
  },
  {
    questionId: '43144510335497494945735899185105197950',
    title: ' 你通常如何在一天中保持清醒？',
    index: 0,
    dimensionName: '效度',
    options: [
      {
        id: '176982423826483638536185531460699259428',
        optionIndex: 'A',
        content: '我不需要保持清醒',
        score: 1,
      },
      {
        id: '336169489608938325470900522341966767499',
        optionIndex: 'B',
        content: '合理饮食和足够的睡眠',
        score: 0,
      },
      {
        id: '112817837582386282779013182883679436443',
        optionIndex: 'C',
        content: '整天都在睡觉',
        score: 1,
      },
      {
        id: '273427170768340609252313778799459741996',
        optionIndex: 'D',
        content: '通过长期熬夜',
        score: 1,
      },
      {
        id: '246635980159068048738270147708135769241',
        optionIndex: 'E',
        content: '通过吃大量的糖',
        score: 1,
      },
      {
        id: '180206290375507786805670226900940893069',
        optionIndex: 'F',
        content: '喝咖啡可以让我清醒',
        score: 0,
      },
    ],
  },
  {
    questionId: '339671255159537865940529842440936393325',
    title: '我记得自己的名字。',
    index: 0,
    dimensionName: '效度',
    options: [
      {
        id: '67682041571234555292095899312532242843',
        optionIndex: 'A',
        content: '完全不符合',
        score: 1,
      },
      {
        id: '125292115397574476543754608250316033353',
        optionIndex: 'B',
        content: '很不符合',
        score: 1,
      },
      {
        id: '150136664609089695069875190698606728731',
        optionIndex: 'C',
        content: '不太符合',
        score: 0,
      },
      {
        id: '221875880816985050864673614303084244850',
        optionIndex: 'D',
        content: '比较符合',
        score: 0,
      },
      {
        id: '232862863528098104709355764241832564779',
        optionIndex: 'E',
        content: '大部分符合',
        score: 0,
      },
      {
        id: '166231834019671707487486846049659081955',
        optionIndex: 'F',
        content: '完全符合',
        score: 0,
      },
    ],
  },
  {
    questionId: '323790232130856950582080890325046730141',
    title: '你是否有过在太空中行走的经历？',
    index: 0,
    dimensionName: '效度',
    options: [
      {
        id: '43094046570869212152974342871426048053',
        optionIndex: 'A',
        content: '每天',
        score: 1,
      },
      {
        id: '294604449325513058118267098874515552329',
        optionIndex: 'B',
        content: '经常',
        score: 1,
      },
      {
        id: '59113194591832423160184244487103558197',
        optionIndex: 'C',
        content: '很少',
        score: 1,
      },
      {
        id: '23272335292034196678105354765878800413',
        optionIndex: 'D',
        content: '几乎没有',
        score: 1,
      },
      {
        id: '115242052473338477091086276675652700976',
        optionIndex: 'E',
        content: '完全没有',
        score: 0,
      },
      {
        id: '276684762548524235360404444997403755053',
        optionIndex: 'F',
        content: '不记得了',
        score: 1,
      },
    ],
  },
  {
    questionId: '77138164183214354055342798388582065214',
    title: '我每天都睡觉。',
    index: 0,
    dimensionName: '效度',
    options: [
      {
        id: '239141514784491079595181657665935477296',
        optionIndex: 'A',
        content: '完全不符合',
        score: 1,
      },
      {
        id: '320718171684685544564908789970233948205',
        optionIndex: 'B',
        content: '很不符合',
        score: 1,
      },
      {
        id: '69043011567954369970567472128189546769',
        optionIndex: 'C',
        content: '不太符合',
        score: 1,
      },
      {
        id: '158797383633393175890481354040996397518',
        optionIndex: 'D',
        content: '比较符合',
        score: 1,
      },
      {
        id: '332780702981590627937285004699136021647',
        optionIndex: 'E',
        content: '大部分符合',
        score: 0,
      },
      {
        id: '338410696321108633689818517039924128066',
        optionIndex: 'F',
        content: '完全符合',
        score: 0,
      },
    ],
  },
  {
    questionId: '65844749294530484499642584681026253209',
    title: '你是否曾与恐龙共舞？',
    index: 0,
    dimensionName: '效度',
    options: [
      {
        id: '141145663961428583743403202905509927139',
        optionIndex: 'A',
        content: '几乎每天',
        score: 1,
      },
      {
        id: '24211264009859054093048033739640663818',
        optionIndex: 'B',
        content: '非常频繁',
        score: 1,
      },
      {
        id: '319240152329260145611409875622572104930',
        optionIndex: 'C',
        content: '经常',
        score: 1,
      },
      {
        id: '70048009570815234790977158029851193823',
        optionIndex: 'D',
        content: '偶尔',
        score: 1,
      },
      {
        id: '143773951497970217113264970070258246408',
        optionIndex: 'E',
        content: '没有',
        score: 0,
      },
      {
        id: '302898925685498040946995378920475440039',
        optionIndex: 'F',
        content: '不记得了',
        score: 1,
      },
    ],
  },
  {
    questionId: '210189552934342275549629898182895436417',
    title: '我认真完成了本次问卷。',
    index: 0,
    dimensionName: '效度',
    options: [
      {
        id: '160426652362594167206055182528891947588',
        optionIndex: 'A',
        content: '完全不符合',
        score: 1,
      },
      {
        id: '155611478899672103518912536691737259745',
        optionIndex: 'B',
        content: '很不符合',
        score: 1,
      },
      {
        id: '67270156952255824326527640694185227411',
        optionIndex: 'C',
        content: '不太符合',
        score: 0,
      },
      {
        id: '264883554378454573127143501314422313973',
        optionIndex: 'D',
        content: '比较符合',
        score: 0,
      },
      {
        id: '278739976128355316655334628739783362457',
        optionIndex: 'E',
        content: '大部分符合',
        score: 0,
      },
      {
        id: '198906336548358996006780695644632476003',
        optionIndex: 'F',
        content: '完全符合',
        score: 0,
      },
    ],
  },
  {
    questionId: '242166106469133158808602261988875626683',
    title: '我每天都在生气。',
    index: 0,
    dimensionName: '效度',
    options: [
      {
        id: '76977941706837750969113264271060608249',
        optionIndex: 'A',
        content: '完全不符合',
        score: 0,
      },
      {
        id: '314431292533729108742702513585552067821',
        optionIndex: 'B',
        content: '很不符合',
        score: 0,
      },
      {
        id: '211535651647038589465674244024245478077',
        optionIndex: 'C',
        content: '不太符合',
        score: 1,
      },
      {
        id: '123575074776708923136865705181954115370',
        optionIndex: 'D',
        content: '比较符合',
        score: 1,
      },
      {
        id: '151545822020220714670035377254301521224',
        optionIndex: 'E',
        content: '大部分符合',
        score: 1,
      },
      {
        id: '218697165227768511359620325784294289912',
        optionIndex: 'F',
        content: '完全符合',
        score: 1,
      },
    ],
  },
  {
    questionId: '288095645430557364790269472540699399197',
    title: '当你感到口渴时，你通常会做什么？',
    index: 0,
    dimensionName: '效度',
    options: [
      {
        id: '221183244997843151120663441757706057246',
        optionIndex: 'A',
        content: '喝水',
        score: 0,
      },
      {
        id: '115982843285827118198773327587835508741',
        optionIndex: 'B',
        content: '跳舞',
        score: 1,
      },
      {
        id: '10234305106899005257156546418016068469',
        optionIndex: 'C',
        content: '玩游戏',
        score: 1,
      },
      {
        id: '254426536931669937829267694303562468172',
        optionIndex: 'D',
        content: '画画 ',
        score: 1,
      },
      {
        id: '42498317006557836231238351526066965302',
        optionIndex: 'E',
        content: '吃苹果',
        score: 0,
      },
      {
        id: '126772201269448695797450691265341431291',
        optionIndex: 'F',
        content: '看书',
        score: 1,
      },
    ],
  },
  {
    questionId: '201717855518245262782871759449523987450',
    title: '我每天都吃饭。',
    index: 0,
    dimensionName: '效度',
    options: [
      {
        id: '165940527634583388773903650772833546169',
        optionIndex: 'A',
        content: '完全不符合',
        score: 1,
      },
      {
        id: '303388064153051352179870865953956481286',
        optionIndex: 'B',
        content: '很不符合',
        score: 1,
      },
      {
        id: '108853529400904640736554611936496961601',
        optionIndex: 'C',
        content: '不太符合',
        score: 1,
      },
      {
        id: '170274629472024812033737233580109079944',
        optionIndex: 'D',
        content: '比较符合',
        score: 0,
      },
      {
        id: '111193605549575091613842487673578593587',
        optionIndex: 'E',
        content: '大部分符合',
        score: 0,
      },
      {
        id: '56221543916812921412740367793872852727',
        optionIndex: 'F',
        content: '完全符合',
        score: 0,
      },
    ],
  },
  {
    questionId: '194523591026660035826731317568924697722',
    title: '现实生活中我不认识任何人。',
    index: 0,
    dimensionName: '效度',
    options: [
      {
        id: '292222927973725177709055735488518684780',
        optionIndex: 'A',
        content: '完全不符合',
        score: 0,
      },
      {
        id: '63527896475932625016830663816186529848',
        optionIndex: 'B',
        content: '很不符合',
        score: 0,
      },
      {
        id: '31425852088319853838530842223341030588',
        optionIndex: 'C',
        content: '不太符合',
        score: 1,
      },
      {
        id: '122753781034213894887465717111136706352',
        optionIndex: 'D',
        content: '比较符合',
        score: 1,
      },
      {
        id: '31420787010996470257545192722567593903',
        optionIndex: 'E',
        content: '大部分符合',
        score: 1,
      },
      {
        id: '243328249002561311674701034553298606604',
        optionIndex: 'F',
        content: '完全符合',
        score: 1,
      },
    ],
  },
  {
    questionId: '176660676491593128425888889383492675332',
    title: '你是否曾与恐龙共舞？',
    index: 0,
    dimensionName: '效度',
    options: [
      {
        id: '185499488015842069973383173867439865031',
        optionIndex: 'A',
        content: '很多次',
        score: 1,
      },
      {
        id: '322971497758559791681834640038238237029',
        optionIndex: 'B',
        content: '偶尔',
        score: 1,
      },
      {
        id: '35999008290388750215958628189593979543',
        optionIndex: 'C',
        content: '没有',
        score: 0,
      },
      {
        id: '264479511627977788162935930193309596231',
        optionIndex: 'D',
        content: '不记得了',
        score: 1,
      },
    ],
  },
])
</script>

<style lang="scss" scoped>
.validityTestingQuestions {
  width: 100%;
  height: 100%;
  padding-top: 12rpx;
  box-sizing: border-box;
  .questionList {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    .questionItem {
      width: 100%;
      padding: 24rpx 32rpx 32rpx 32rpx;
      box-sizing: border-box;
      background-color: #ffffff;
      margin-bottom: 8rpx;
      &:last-child {
        margin-bottom: 0rpx;
      }
      .topic {
        width: 100%;
        height: 40rpx;
        font-family: PingFang SC, PingFang SC;
        font-weight: 800;
        font-size: 28rpx;
        color: #434343;
        line-height: 40rpx;
        margin-bottom: 24rpx;
      }
      .answer {
        width: 100%;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        padding: 0rpx 8rpx;
        box-sizing: border-box;
        .answerItem {
          width: 100%;
          height: 36rpx;
          margin-bottom: 24rpx;
          display: flex;
          .option {
            height: 100%;
            font-family: PingFang SC, PingFang SC;
            font-weight: 400;
            font-size: 26rpx;
            color: #818181;
            line-height: 36rpx;
          }
          .scoreValue {
            height: 36rpx;
            font-family: PingFang SC, PingFang SC;
            font-weight: 400;
            font-size: 26rpx;
            color: #000000;
            line-height: 36rpx;
          }
        }
      }
    }
  }
}
</style>
