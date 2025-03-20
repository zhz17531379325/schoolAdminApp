<template>
  <view class="scalePreview">
    <view class="title">《儿童自我意识量表（CSCS）》</view>
    <view class="guidingLanguage"
      >Piers-Harris儿童自我意识量表（CSCS）是美国心理学家Piers和Harris于1969年编制、1974年修订的儿童自评量表，主要用于评价儿童的自我意识。该量表适用于8-16岁的儿童，可用于临床和科研，也可作为筛查工具用于调查。CSCS在国外应用较为广泛，信效度较好。苏林雁等人于2000年，在全国20个城市采样1698例，建立了CSCS的中国城市常模。
      CSCS共有80道关于自我意识的问题，要求被试判断每个问题是否符合自己的实际情况。其中，37道题目为正向计分，43道题目为反向计分。CSCS包括6个分量表：行为、智力与学校情况、躯体外貌与属性、焦虑、合群、幸福与满足。</view
    >
    <view class="topicList">
      <view class="topicItem" v-for="(item, index) in topicList" :key="index">
        <view class="top">
          <view class="questionNumber">{{ `第${index + 1}题` }}</view>
          <view class="topic">{{ item.title }}</view>
        </view>
        <view class="optionList">
          <view
            class="optionItem"
            v-for="(option, optionIndex) in item.options"
            :key="optionIndex"
            >{{ `${option.optionIndex}. ${option.content}` }}
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script setup name="scalePreview">
const topicList = ref([
  {
    questionId: '113233184806148682142135137695940103547',
    title: '我的同学嘲弄我。',
    index: 1,
    dimensionName: '',
    options: [
      {
        id: '218785781487450663052581533803207055019',
        optionIndex: 'A',
        content: '是',
        score: 0,
      },
      {
        id: '117423986867136051422392588332177270077',
        optionIndex: 'B',
        content: '否',
        score: 1,
      },
    ],
  },
  {
    questionId: '126609271144641937782644471234211957736',
    title: '我是一个幸福的人。',
    index: 2,
    dimensionName: '',
    options: [
      {
        id: '112022841561165038346958509923266619702',
        optionIndex: 'A',
        content: '是',
        score: 1,
      },
      {
        id: '223678883848984239198144789927955057129',
        optionIndex: 'B',
        content: '否',
        score: 0,
      },
    ],
  },
  {
    questionId: '45887951933548178354671317265497081806',
    title: '我很难交朋友。',
    index: 3,
    dimensionName: '',
    options: [
      {
        id: '12038455966073413531084016384862131076',
        optionIndex: 'A',
        content: '是',
        score: 0,
      },
      {
        id: '239956535102042132405412403950415343835',
        optionIndex: 'B',
        content: '否',
        score: 1,
      },
    ],
  },
  {
    questionId: '321714439451342365210674581189558020617',
    title: '我经常悲伤。',
    index: 4,
    dimensionName: '',
    options: [
      {
        id: '167851381904995433214590625457853997238',
        optionIndex: 'A',
        content: '是',
        score: 0,
      },
      {
        id: '193388688957212866288199035133417350828',
        optionIndex: 'B',
        content: '否',
        score: 1,
      },
    ],
  },
  {
    questionId: '203362545420455468687550549260927904366',
    title: '我聪明。',
    index: 5,
    dimensionName: '',
    options: [
      {
        id: '40812784404439946650673058020946697409',
        optionIndex: 'A',
        content: '是',
        score: 1,
      },
      {
        id: '252526568284564835614310623831855675526',
        optionIndex: 'B',
        content: '否',
        score: 0,
      },
    ],
  },
  {
    questionId: '21443227126193301135074621801732479128',
    title: '我害羞。',
    index: 6,
    dimensionName: '',
    options: [
      {
        id: '25893378748752060054774132596474410154',
        optionIndex: 'A',
        content: '是',
        score: 0,
      },
      {
        id: '38639088277149796513631480865040907809',
        optionIndex: 'B',
        content: '否',
        score: 1,
      },
    ],
  },
  {
    questionId: '318943848975267713350538379585275143048',
    title: '当老师找我时，我感到紧张。',
    index: 7,
    dimensionName: '',
    options: [
      {
        id: '34897580346209775530282605915769421566',
        optionIndex: 'A',
        content: '是',
        score: 0,
      },
      {
        id: '162822179352638322130483257306049051340',
        optionIndex: 'B',
        content: '否',
        score: 1,
      },
    ],
  },
  {
    questionId: '306961295547148550016603500005802129833',
    title: '我的容貌使我烦恼。',
    index: 8,
    dimensionName: '',
    options: [
      {
        id: '126981422006533983785119732071303518261',
        optionIndex: 'A',
        content: '是',
        score: 0,
      },
      {
        id: '283565631712705822512392453395041056118',
        optionIndex: 'B',
        content: '否',
        score: 1,
      },
    ],
  },
  {
    questionId: '299651248221753348641297280315287569091',
    title: '我长大后将成为一个重要的人物。',
    index: 9,
    dimensionName: '',
    options: [
      {
        id: '176156331419259534955082163751197267021',
        optionIndex: 'A',
        content: '是',
        score: 1,
      },
      {
        id: '253167727766111502674191223684632695987',
        optionIndex: 'B',
        content: '否',
        score: 0,
      },
    ],
  },
  {
    questionId: '212508079477448396426508559253206238259',
    title: '当学校要考试时，我就烦恼。',
    index: 10,
    dimensionName: '',
    options: [
      {
        id: '257623047049424329643916211278610504532',
        optionIndex: 'A',
        content: '是',
        score: 0,
      },
      {
        id: '281212767385429022280242445178155393880',
        optionIndex: 'B',
        content: '否',
        score: 1,
      },
    ],
  },
  {
    questionId: '171731181605570764495871207407738614004',
    title: '我和别人合不来。',
    index: 11,
    dimensionName: '',
    options: [
      {
        id: '320544613138549027417331578160912989967',
        optionIndex: 'A',
        content: '是',
        score: 0,
      },
      {
        id: '118129627250470815637095136855448357868',
        optionIndex: 'B',
        content: '否',
        score: 1,
      },
    ],
  },
  {
    questionId: '107876009064282641790155772021001353058',
    title: '在学校里我表现好。',
    index: 12,
    dimensionName: '',
    options: [
      {
        id: '13839964973038302223925610443964991552',
        optionIndex: 'A',
        content: '是',
        score: 1,
      },
      {
        id: '32264547489894584444460204642319793905',
        optionIndex: 'B',
        content: '否',
        score: 0,
      },
    ],
  },
  {
    questionId: '262736950106060347255666926631740446157',
    title: '当某件事做错了常常是我的过错。',
    index: 13,
    dimensionName: '',
    options: [
      {
        id: '121517618030707250942718496581004310777',
        optionIndex: 'A',
        content: '是',
        score: 0,
      },
      {
        id: '130018330441649117504639114324974130002',
        optionIndex: 'B',
        content: '否',
        score: 1,
      },
    ],
  },
  {
    questionId: '313455526254356533821542266622848343720',
    title: '我给家里带来麻烦。',
    index: 14,
    dimensionName: '',
    options: [
      {
        id: '82656093192115518994242233526885619656',
        optionIndex: 'A',
        content: '是',
        score: 0,
      },
      {
        id: '10840987506048970938037788629950755106',
        optionIndex: 'B',
        content: '否',
        score: 1,
      },
    ],
  },
  {
    questionId: '206497133188474240947241165013486561338',
    title: '我是强壮的。',
    index: 15,
    dimensionName: '',
    options: [
      {
        id: '110962701482350336293091618639595803083',
        optionIndex: 'A',
        content: '是',
        score: 1,
      },
      {
        id: '201576850385911490036521348607884265607',
        optionIndex: 'B',
        content: '否',
        score: 0,
      },
    ],
  },
  {
    questionId: '219280533897118342144053382708990113311',
    title: '我常常有好主意。',
    index: 16,
    dimensionName: '',
    options: [
      {
        id: '197525697326531551800979396950799018229',
        optionIndex: 'A',
        content: '是',
        score: 1,
      },
      {
        id: '32219019358139042168292805699814158573',
        optionIndex: 'B',
        content: '否',
        score: 0,
      },
    ],
  },
  {
    questionId: '323490746198666908531293768505796800358',
    title: '我在家里是重要的一员。',
    index: 17,
    dimensionName: '',
    options: [
      {
        id: '195332835985612765712377198606505650491',
        optionIndex: 'A',
        content: '是',
        score: 1,
      },
      {
        id: '19104026397714002466118487073944705122',
        optionIndex: 'B',
        content: '否',
        score: 0,
      },
    ],
  },
  {
    questionId: '300482365054191076307128648824255344091',
    title: '我常常想按自己的主意办事。',
    index: 18,
    dimensionName: '',
    options: [
      {
        id: '200943935259565425382744192602692499569',
        optionIndex: 'A',
        content: '是',
        score: 0,
      },
      {
        id: '109009296953593373206381228914939957981',
        optionIndex: 'B',
        content: '否',
        score: 1,
      },
    ],
  },
  {
    questionId: '83861705644822843224133633501162613974',
    title: '我善于做手工劳动。',
    index: 19,
    dimensionName: '',
    options: [
      {
        id: '96242712094872421848180624823480483623',
        optionIndex: 'A',
        content: '是',
        score: 1,
      },
      {
        id: '58580571841464558806442680076809509757',
        optionIndex: 'B',
        content: '否',
        score: 0,
      },
    ],
  },
  {
    questionId: '299771567333296345252311134164743571757',
    title: '我易于泄气。',
    index: 20,
    dimensionName: '',
    options: [
      {
        id: '297448335189598342078411424864133231324',
        optionIndex: 'A',
        content: '是',
        score: 0,
      },
      {
        id: '73969546614576676140524430575992996936',
        optionIndex: 'B',
        content: '否',
        score: 1,
      },
    ],
  },
  {
    questionId: '76542378485555284173856218879279854427',
    title: '我的学校作业做得好。',
    index: 21,
    dimensionName: '',
    options: [
      {
        id: '95578729391184764825585406057756443962',
        optionIndex: 'A',
        content: '是',
        score: 1,
      },
      {
        id: '156466999610597354832475783280858895627',
        optionIndex: 'B',
        content: '否',
        score: 0,
      },
    ],
  },
  {
    questionId: '255094592058510359097982299593113089439',
    title: '我干许多坏事。',
    index: 22,
    dimensionName: '',
    options: [
      {
        id: '324908663799812077733435258587142667587',
        optionIndex: 'A',
        content: '是',
        score: 0,
      },
      {
        id: '106733980772563631174699752896888171190',
        optionIndex: 'B',
        content: '否',
        score: 1,
      },
    ],
  },
  {
    questionId: '313109575385218317100532356467079737331',
    title: '我很会画画。',
    index: 23,
    dimensionName: '',
    options: [
      {
        id: '323869459391010858830075639822502885716',
        optionIndex: 'A',
        content: '是',
        score: 1,
      },
      {
        id: '327469018278155499393484766046800419410',
        optionIndex: 'B',
        content: '否',
        score: 0,
      },
    ],
  },
  {
    questionId: '12961228692777163345662630425675115863',
    title: '在音乐方面我不错。',
    index: 24,
    dimensionName: '',
    options: [
      {
        id: '334180816913675483102402681471758390298',
        optionIndex: 'A',
        content: '是',
        score: 1,
      },
      {
        id: '127409840362595546379541377565571238846',
        optionIndex: 'B',
        content: '否',
        score: 0,
      },
    ],
  },
  {
    questionId: '58800047618713106946300489555029465218',
    title: '我在家表现不好。',
    index: 25,
    dimensionName: '',
    options: [
      {
        id: '226198640509617208014163563689998387392',
        optionIndex: 'A',
        content: '是',
        score: 0,
      },
      {
        id: '215483295018043811727971761559318704679',
        optionIndex: 'B',
        content: '否',
        score: 1,
      },
    ],
  },
  {
    questionId: '28785705595912810982268702206500648288',
    title: '我完成学校作业很慢。',
    index: 26,
    dimensionName: '',
    options: [
      {
        id: '93159833883978075255033065938163048296',
        optionIndex: 'A',
        content: '是',
        score: 0,
      },
      {
        id: '31007727296294699438516465027607182606',
        optionIndex: 'B',
        content: '否',
        score: 1,
      },
    ],
  },
  {
    questionId: '179015987678881260051165110055697721007',
    title: '在班上我是一个重要的人。',
    index: 27,
    dimensionName: '',
    options: [
      {
        id: '229001838097140904013420513248179436477',
        optionIndex: 'A',
        content: '是',
        score: 1,
      },
      {
        id: '211306792541146748210169529189378932324',
        optionIndex: 'B',
        content: '否',
        score: 0,
      },
    ],
  },
  {
    questionId: '148335230358286971105551046319741036010',
    title: '我容易紧张。',
    index: 28,
    dimensionName: '',
    options: [
      {
        id: '31597106624381565236811991137308505969',
        optionIndex: 'A',
        content: '是',
        score: 0,
      },
      {
        id: '235771531460298697237347112805219065839',
        optionIndex: 'B',
        content: '否',
        score: 1,
      },
    ],
  },
  {
    questionId: '268114464690397729478638844022241927223',
    title: '我有一双漂亮的眼睛。',
    index: 29,
    dimensionName: '',
    options: [
      {
        id: '171633000157373715253625867440602846562',
        optionIndex: 'A',
        content: '是',
        score: 1,
      },
      {
        id: '272351513796409372638733917166482149112',
        optionIndex: 'B',
        content: '否',
        score: 0,
      },
    ],
  },
  {
    questionId: '63077587815430640200684115138000007436',
    title: '在全班同学面前讲话我可以讲得很好。',
    index: 30,
    dimensionName: '',
    options: [
      {
        id: '266847453148942108559827571943764427160',
        optionIndex: 'A',
        content: '是',
        score: 1,
      },
      {
        id: '239746373441864329239568171132164908712',
        optionIndex: 'B',
        content: '否',
        score: 0,
      },
    ],
  },
  {
    questionId: '16950716184215983404836471847823498407',
    title: '在学校我是一个幻想家。',
    index: 31,
    dimensionName: '',
    options: [
      {
        id: '311829601856062203883128868142260818403',
        optionIndex: 'A',
        content: '是',
        score: 0,
      },
      {
        id: '246446065635312323964453907424791497838',
        optionIndex: 'B',
        content: '否',
        score: 1,
      },
    ],
  },
  {
    questionId: '315366888815251504802650038894590188435',
    title: '我常常捉弄我的兄弟姐妹。',
    index: 32,
    dimensionName: '',
    options: [
      {
        id: '118597461439970952928007936817077987149',
        optionIndex: 'A',
        content: '是',
        score: 1,
      },
      {
        id: '285526573737030703049000015992325603544',
        optionIndex: 'B',
        content: '否',
        score: 0,
      },
    ],
  },
  {
    questionId: '145724265704666625322209698588126427188',
    title: '我的朋友喜欢我的主意。',
    index: 33,
    dimensionName: '',
    options: [
      {
        id: '268344041435664823014040431548344307598',
        optionIndex: 'A',
        content: '是',
        score: 1,
      },
      {
        id: '303851578976624966456565034416294262780',
        optionIndex: 'B',
        content: '否',
        score: 0,
      },
    ],
  },
  {
    questionId: '311713196687150175420207433907014829375',
    title: '我常常遇到麻烦。',
    index: 34,
    dimensionName: '',
    options: [
      {
        id: '333365611304392918814503957449974523338',
        optionIndex: 'A',
        content: '是',
        score: 0,
      },
      {
        id: '41884331389653127651453008642425607285',
        optionIndex: 'B',
        content: '否',
        score: 1,
      },
    ],
  },
  {
    questionId: '307562059830933200336897654635049306361',
    title: '在家里我听话。',
    index: 35,
    dimensionName: '',
    options: [
      {
        id: '193698048116698262854655768177533473707',
        optionIndex: 'A',
        content: '是',
        score: 1,
      },
      {
        id: '53012770860917818916292886959283147849',
        optionIndex: 'B',
        content: '否',
        score: 0,
      },
    ],
  },
  {
    questionId: '104109257367903530210618098497381773427',
    title: '我运气好。',
    index: 36,
    dimensionName: '',
    options: [
      {
        id: '166762276527882543878199277216119420114',
        optionIndex: 'A',
        content: '是',
        score: 1,
      },
      {
        id: '268379832364454438134921679017823584546',
        optionIndex: 'B',
        content: '否',
        score: 0,
      },
    ],
  },
  {
    questionId: '238797102687901095560557777041323166073',
    title: '我常常很担忧。',
    index: 37,
    dimensionName: '',
    options: [
      {
        id: '224203813029655964741837738528924955942',
        optionIndex: 'A',
        content: '是',
        score: 0,
      },
      {
        id: '261546322913591125861862535675799149221',
        optionIndex: 'B',
        content: '否',
        score: 1,
      },
    ],
  },
  {
    questionId: '297297937742786810960604316699474682460',
    title: '我的父母对我期望过高。',
    index: 38,
    dimensionName: '',
    options: [
      {
        id: '133761991408502969889733848947612683433',
        optionIndex: 'A',
        content: '是',
        score: 0,
      },
      {
        id: '205021415909614844362977630309077035617',
        optionIndex: 'B',
        content: '否',
        score: 1,
      },
    ],
  },
  {
    questionId: '184886361800310180831948410798575699638',
    title: '我喜欢按自己的方式做事。',
    index: 39,
    dimensionName: '',
    options: [
      {
        id: '92997001543599258674308019846625358383',
        optionIndex: 'A',
        content: '是',
        score: 1,
      },
      {
        id: '161907053546608287792744570877860637520',
        optionIndex: 'B',
        content: '否',
        score: 0,
      },
    ],
  },
  {
    questionId: '245612657184307518822150332597226973219',
    title: '我觉得自己做事丢三落四。',
    index: 40,
    dimensionName: '',
    options: [
      {
        id: '150520402520970050336074331205585417940',
        optionIndex: 'A',
        content: '是',
        score: 0,
      },
      {
        id: '333633097718814664097979560823835170156',
        optionIndex: 'B',
        content: '否',
        score: 1,
      },
    ],
  },
  {
    questionId: '83303395240088356376562131475873400170',
    title: '我的头发很好。',
    index: 41,
    dimensionName: '',
    options: [
      {
        id: '220816288689123404441611711875883492312',
        optionIndex: 'A',
        content: '是',
        score: 1,
      },
      {
        id: '3479046671869097404447111537101063042',
        optionIndex: 'B',
        content: '否',
        score: 0,
      },
    ],
  },
  {
    questionId: '39479881034501129461200170904624632563',
    title: '在学校我自愿做一些事。',
    index: 42,
    dimensionName: '',
    options: [
      {
        id: '166302807674215913448730036721453992920',
        optionIndex: 'A',
        content: '是',
        score: 1,
      },
      {
        id: '243791901003969108855599860410357623711',
        optionIndex: 'B',
        content: '否',
        score: 0,
      },
    ],
  },
  {
    questionId: '66732558185343877986976394267979019751',
    title: '我希望我与众不同。',
    index: 43,
    dimensionName: '',
    options: [
      {
        id: '18185618422176108769661541299290673683',
        optionIndex: 'A',
        content: '是',
        score: 0,
      },
      {
        id: '118833407278588512391549327397595393758',
        optionIndex: 'B',
        content: '否',
        score: 1,
      },
    ],
  },
  {
    questionId: '293063376000589994612612340809302517232',
    title: '我晚上睡得好。',
    index: 44,
    dimensionName: '',
    options: [
      {
        id: '26622874445065104908330523373284274575',
        optionIndex: 'A',
        content: '是',
        score: 1,
      },
      {
        id: '817622676818876764660738471353811088',
        optionIndex: 'B',
        content: '否',
        score: 0,
      },
    ],
  },
  {
    questionId: '263585115908547722500808947905939524659',
    title: '我讨厌学校。',
    index: 45,
    dimensionName: '',
    options: [
      {
        id: '186688348068729230499042600014799757199',
        optionIndex: 'A',
        content: '是',
        score: 0,
      },
      {
        id: '54304478566578612849819957244156891752',
        optionIndex: 'B',
        content: '否',
        score: 1,
      },
    ],
  },
  {
    questionId: '222826763596689468456835174865350035644',
    title: '在游戏活动中我是最后被选入的成员之一。',
    index: 46,
    dimensionName: '',
    options: [
      {
        id: '221752349044314987682429741694027909210',
        optionIndex: 'A',
        content: '是',
        score: 0,
      },
      {
        id: '169989487434061584456246458685803000533',
        optionIndex: 'B',
        content: '否',
        score: 1,
      },
    ],
  },
  {
    questionId: '313094858314734207942046287389784194512',
    title: '我常常生病。',
    index: 47,
    dimensionName: '',
    options: [
      {
        id: '237816101340428154642179948810731493327',
        optionIndex: 'A',
        content: '是',
        score: 0,
      },
      {
        id: '2067515369293859846497286471827566593',
        optionIndex: 'B',
        content: '否',
        score: 1,
      },
    ],
  },
  {
    questionId: '78656071134845812367494781502201165794',
    title: '我常常对别人小气。',
    index: 48,
    dimensionName: '',
    options: [
      {
        id: '5143637310137648065746152567491116699',
        optionIndex: 'A',
        content: '是',
        score: 0,
      },
      {
        id: '164163198566241926055193225352765275416',
        optionIndex: 'B',
        content: '否',
        score: 1,
      },
    ],
  },
  {
    questionId: '322449978581116084728709615575884213959',
    title: '在学校里同学们认为我有好主意。',
    index: 49,
    dimensionName: '',
    options: [
      {
        id: '34283568868637293848613154670590803107',
        optionIndex: 'A',
        content: '是',
        score: 1,
      },
      {
        id: '332474874010246389381196163934511172154',
        optionIndex: 'B',
        content: '否',
        score: 0,
      },
    ],
  },
  {
    questionId: '184350076314433205630750870052131041546',
    title: '我不高兴。',
    index: 50,
    dimensionName: '',
    options: [
      {
        id: '34815232739495712713610628138851585059',
        optionIndex: 'A',
        content: '是',
        score: 0,
      },
      {
        id: '35188925535280631327925839775871220116',
        optionIndex: 'B',
        content: '否',
        score: 1,
      },
    ],
  },
  {
    questionId: '223824639585104398954690665010678468789',
    title: '我有许多朋友。',
    index: 51,
    dimensionName: '',
    options: [
      {
        id: '71660859391229112933382530142518045468',
        optionIndex: 'A',
        content: '是',
        score: 1,
      },
      {
        id: '40778656785130926808291307591726481438',
        optionIndex: 'B',
        content: '否',
        score: 0,
      },
    ],
  },
  {
    questionId: '38680221416494071037653958560558359627',
    title: '我快乐。',
    index: 52,
    dimensionName: '',
    options: [
      {
        id: '7844499275547617232864336038989415223',
        optionIndex: 'A',
        content: '是',
        score: 1,
      },
      {
        id: '1284517225318974388680564575156347320',
        optionIndex: 'B',
        content: '否',
        score: 0,
      },
    ],
  },
  {
    questionId: '236327247858613702535504111461497573561',
    title: '对大多数事我不发表意见。',
    index: 53,
    dimensionName: '',
    options: [
      {
        id: '119868897622391856521453651584252904561',
        optionIndex: 'A',
        content: '是',
        score: 0,
      },
      {
        id: '132624685307200081514874941200323481705',
        optionIndex: 'B',
        content: '否',
        score: 1,
      },
    ],
  },
  {
    questionId: '123840994894834180960797370798246220723',
    title: '我长得漂亮。',
    index: 54,
    dimensionName: '',
    options: [
      {
        id: '168344512021536718250366054824871314878',
        optionIndex: 'A',
        content: '是',
        score: 1,
      },
      {
        id: '249238114454327572533531878917942066896',
        optionIndex: 'B',
        content: '否',
        score: 0,
      },
    ],
  },
  {
    questionId: '235557570700923823564677241444159238956',
    title: '我精力充沛。',
    index: 55,
    dimensionName: '',
    options: [
      {
        id: '186861622932524206614270661633430115637',
        optionIndex: 'A',
        content: '是',
        score: 1,
      },
      {
        id: '109181310928062453894598372768400175508',
        optionIndex: 'B',
        content: '否',
        score: 0,
      },
    ],
  },
  {
    questionId: '139196459763794367847371403934055299404',
    title: '我常常打架。',
    index: 56,
    dimensionName: '',
    options: [
      {
        id: '152698674324790284057400121165698970234',
        optionIndex: 'A',
        content: '是',
        score: 0,
      },
      {
        id: '99462803677939174825934051741005240492',
        optionIndex: 'B',
        content: '否',
        score: 1,
      },
    ],
  },
  {
    questionId: '186180154507940184399956142391227734986',
    title: '我与男孩子合得来。',
    index: 57,
    dimensionName: '',
    options: [
      {
        id: '233293065676690180310802161142996871706',
        optionIndex: 'A',
        content: '是',
        score: 1,
      },
      {
        id: '279892831678055310688571238219578724476',
        optionIndex: 'B',
        content: '否',
        score: 0,
      },
    ],
  },
  {
    questionId: '230538386335528844115834141770988954398',
    title: '别人常常捉弄我。',
    index: 58,
    dimensionName: '',
    options: [
      {
        id: '104850262041630389967066135678574977110',
        optionIndex: 'A',
        content: '是',
        score: 0,
      },
      {
        id: '297001877585504927411837199469823508029',
        optionIndex: 'B',
        content: '否',
        score: 1,
      },
    ],
  },
  {
    questionId: '149821240481648304970366803188372792979',
    title: '我家里对我失望。',
    index: 59,
    dimensionName: '',
    options: [
      {
        id: '34485335332368647922414998146573598244',
        optionIndex: 'A',
        content: '是',
        score: 0,
      },
      {
        id: '68587271729700131179383031488975120618',
        optionIndex: 'B',
        content: '否',
        score: 1,
      },
    ],
  },
  {
    questionId: '98607895143179875045026654113426693960',
    title: '我有一张令人愉快的脸。',
    index: 60,
    dimensionName: '',
    options: [
      {
        id: '261460742853419585896689520956056638305',
        optionIndex: 'A',
        content: '是',
        score: 1,
      },
      {
        id: '130405612819152196986632988045649706177',
        optionIndex: 'B',
        content: '否',
        score: 0,
      },
    ],
  },
  {
    questionId: '62041934007857752916091197753028143812',
    title: '当我要做什么事时总觉得不顺心。',
    index: 61,
    dimensionName: '',
    options: [
      {
        id: '248696785717200859697966997164036138518',
        optionIndex: 'A',
        content: '是',
        score: 0,
      },
      {
        id: '236451972113337937419197615850948624040',
        optionIndex: 'B',
        content: '否',
        score: 1,
      },
    ],
  },
  {
    questionId: '192951528821991740192813035877448272958',
    title: '在家里我常常被捉弄。',
    index: 62,
    dimensionName: '',
    options: [
      {
        id: '329855566116015353583045422949788447234',
        optionIndex: 'A',
        content: '是',
        score: 0,
      },
      {
        id: '14016354368729897471599166055761578030',
        optionIndex: 'B',
        content: '否',
        score: 1,
      },
    ],
  },
  {
    questionId: '35386814018852242663974547508076811005',
    title: '在游戏和体育活动中我是一个带头人。',
    index: 63,
    dimensionName: '',
    options: [
      {
        id: '338124514007545535424600711041561874519',
        optionIndex: 'A',
        content: '是',
        score: 1,
      },
      {
        id: '150847244793728994952339010854875457356',
        optionIndex: 'B',
        content: '否',
        score: 0,
      },
    ],
  },
  {
    questionId: '304865534360059005979617348201797356',
    title: '我笨拙。',
    index: 64,
    dimensionName: '',
    options: [
      {
        id: '71866507381191042774372428243858652329',
        optionIndex: 'A',
        content: '是',
        score: 0,
      },
      {
        id: '180818344454753414837613320816718589216',
        optionIndex: 'B',
        content: '否',
        score: 1,
      },
    ],
  },
  {
    questionId: '182142036478213159182841385561335085851',
    title: '在游戏和体育活动中我只看不参加。',
    index: 65,
    dimensionName: '',
    options: [
      {
        id: '12917346367237650320446322593985290397',
        optionIndex: 'A',
        content: '是',
        score: 0,
      },
      {
        id: '284710856609533633176260316560580140771',
        optionIndex: 'B',
        content: '否',
        score: 1,
      },
    ],
  },
  {
    questionId: '129903801384406579665072939532925543118',
    title: '我常常忘记我所学的东西。',
    index: 66,
    dimensionName: '',
    options: [
      {
        id: '306747121853357248514497934813697145983',
        optionIndex: 'A',
        content: '是',
        score: 0,
      },
      {
        id: '150083767114937905204630069516322319138',
        optionIndex: 'B',
        content: '否',
        score: 1,
      },
    ],
  },
  {
    questionId: '244421663716965047097387015261655076291',
    title: '我容易与别人相处。',
    index: 67,
    dimensionName: '',
    options: [
      {
        id: '251277959422437029210479517702928717773',
        optionIndex: 'A',
        content: '是',
        score: 1,
      },
      {
        id: '113529487161144119259035453312165544272',
        optionIndex: 'B',
        content: '否',
        score: 0,
      },
    ],
  },
  {
    questionId: '229940797172038488560401105659807918810',
    title: '我容易发脾气。',
    index: 68,
    dimensionName: '',
    options: [
      {
        id: '170965124249991271376295494464411187326',
        optionIndex: 'A',
        content: '是',
        score: 0,
      },
      {
        id: '41753512990845352079735655763928705003',
        optionIndex: 'B',
        content: '否',
        score: 1,
      },
    ],
  },
  {
    questionId: '120202165274015350463815262952020182518',
    title: '我与女孩子合得来。',
    index: 69,
    dimensionName: '',
    options: [
      {
        id: '108653783901883517123280890794452450156',
        optionIndex: 'A',
        content: '是',
        score: 1,
      },
      {
        id: '21218532887501754177885606755810683633',
        optionIndex: 'B',
        content: '否',
        score: 0,
      },
    ],
  },
  {
    questionId: '76732646762112486854252516775878995658',
    title: '我喜欢阅读。',
    index: 70,
    dimensionName: '',
    options: [
      {
        id: '153526636159360056787754541094331358531',
        optionIndex: 'A',
        content: '是',
        score: 1,
      },
      {
        id: '62145351593701510278075537282373674531',
        optionIndex: 'B',
        content: '否',
        score: 0,
      },
    ],
  },
  {
    questionId: '115815285252741457868276657391543642960',
    title: '我宁愿独自干事，而不愿与许多人一起做事情。',
    index: 71,
    dimensionName: '',
    options: [
      {
        id: '257364205280309180836581870760641383520',
        optionIndex: 'A',
        content: '是',
        score: 0,
      },
      {
        id: '187926755715231361612681200083747156321',
        optionIndex: 'B',
        content: '否',
        score: 1,
      },
    ],
  },
  {
    questionId: '334397378491662815573389615214681742070',
    title: '我喜欢我的兄弟姐妹。',
    index: 72,
    dimensionName: '',
    options: [
      {
        id: '295378696224828418629301972156175447328',
        optionIndex: 'A',
        content: '是',
        score: 1,
      },
      {
        id: '169050448633896022031395205806232866210',
        optionIndex: 'B',
        content: '否',
        score: 0,
      },
    ],
  },
  {
    questionId: '42121664954842852931701072187742910249',
    title: '我的身材好。',
    index: 73,
    dimensionName: '',
    options: [
      {
        id: '280698729501023536354860746732453778055',
        optionIndex: 'A',
        content: '是',
        score: 1,
      },
      {
        id: '244554673908282789599374491620481744504',
        optionIndex: 'B',
        content: '否',
        score: 0,
      },
    ],
  },
  {
    questionId: '188758638018578884159483721605662900255',
    title: '我常常害怕。',
    index: 74,
    dimensionName: '',
    options: [
      {
        id: '243839596258381917834931281536672160180',
        optionIndex: 'A',
        content: '是',
        score: 0,
      },
      {
        id: '309338378548269934825937275498607161831',
        optionIndex: 'B',
        content: '否',
        score: 1,
      },
    ],
  },
  {
    questionId: '197223817698777306404374944048913072112',
    title: '我总是跌坏东西或打坏东西。',
    index: 75,
    dimensionName: '',
    options: [
      {
        id: '235595557299729651739565566630989224667',
        optionIndex: 'A',
        content: '是',
        score: 0,
      },
      {
        id: '136631138782653766709405261954955886394',
        optionIndex: 'B',
        content: '否',
        score: 1,
      },
    ],
  },
  {
    questionId: '135466877677355822914364531686249785702',
    title: '我能得到别人的信任。',
    index: 76,
    dimensionName: '',
    options: [
      {
        id: '184609940687771938540383620207570066450',
        optionIndex: 'A',
        content: '是',
        score: 1,
      },
      {
        id: '6349543372812784892155819483495378672',
        optionIndex: 'B',
        content: '否',
        score: 0,
      },
    ],
  },
  {
    questionId: '75731451640472833906324461571936699076',
    title: '我与众不同。',
    index: 77,
    dimensionName: '',
    options: [
      {
        id: '75844679801891981850643692349301810552',
        optionIndex: 'A',
        content: '是',
        score: 0,
      },
      {
        id: '331473112961856325995603237677493031891',
        optionIndex: 'B',
        content: '否',
        score: 1,
      },
    ],
  },
  {
    questionId: '254681753852555518896828657200103041318',
    title: '我常常有一些坏的想法。',
    index: 78,
    dimensionName: '',
    options: [
      {
        id: '292251524593950583872560001462790752214',
        optionIndex: 'A',
        content: '是',
        score: 0,
      },
      {
        id: '303475085940673807317620974700680443145',
        optionIndex: 'B',
        content: '否',
        score: 1,
      },
    ],
  },
  {
    questionId: '325010832084282829860974189536350026352',
    title: '我容易哭叫。',
    index: 79,
    dimensionName: '',
    options: [
      {
        id: '320724912998713435443397384689501837172',
        optionIndex: 'A',
        content: '是',
        score: 0,
      },
      {
        id: '42801945722916185322336232716276803328',
        optionIndex: 'B',
        content: '否',
        score: 1,
      },
    ],
  },
  {
    questionId: '294780522741881568191860088014728039711',
    title: '我是一个好人。',
    index: 80,
    dimensionName: '',
    options: [
      {
        id: '310073271147659814689387011909106071967',
        optionIndex: 'A',
        content: '是',
        score: 1,
      },
      {
        id: '53566372612872151555853683156102223276',
        optionIndex: 'B',
        content: '否',
        score: 0,
      },
    ],
  },
])
</script>

<style lang="scss" scoped>
.scalePreview {
  width: 100vw;
  height: 100vh;
  background-color: #ffffff;
  padding: 32rpx 48rpx;
  box-sizing: border-box;
  overflow-y: auto;
  .title {
    width: 100%;
    height: 44rpx;
    font-family: PingFang SC, PingFang SC;
    font-weight: 800;
    font-size: 32rpx;
    color: #000000;
    line-height: 44rpx;
    text-align: center;
    margin-bottom: 32rpx;
  }
  .guidingLanguage {
    width: 100%;
    font-family: PingFang SC, PingFang SC;
    font-weight: 400;
    font-size: 28rpx;
    color: #434343;
    line-height: 33rpx;
    margin-bottom: 48rpx;
  }
  .topicList {
    width: 100%;
    height: auto;
    padding: 0rpx 16rpx;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    .topicItem {
      width: 100%;
      height: auto;
      display: flex;
      flex-direction: column;
      margin-bottom: 48rpx;
      &:last-child {
        margin-bottom: 0;
      }
      .top {
        width: 100%;
        height: 48rpx;
        margin-bottom: 24rpx;
        display: flex;
        align-items: center;
        .questionNumber {
          width: 100rpx;
          height: 48rpx;
          background: #768595;
          border-radius: 8rpx;
          font-family: PingFang SC, PingFang SC;
          font-weight: 500;
          font-size: 26rpx;
          color: #ffffff;
          line-height: 48rpx;
          text-align: center;
          margin-right: 16rpx;
        }
        .topic {
          flex: 1;
          height: 48rpx;
          font-family: PingFang SC, PingFang SC;
          font-weight: 400;
          font-size: 28rpx;
          color: #000000;
          line-height: 48rpx;
        }
      }
      .optionList {
        width: 100%;
        height: auto;
        padding: 0rpx 16rpx;
        box-sizing: border-box;
        .optionItem {
          width: 100%;
          height: 32rpx;
          font-family: PingFang SC, PingFang SC;
          font-weight: 400;
          font-size: 28rpx;
          color: #000000;
          line-height: 32rpx;
          margin-bottom: 24rpx;
          &:last-child {
            margin-bottom: 0;
          }
        }
      }
    }
  }
}
</style>
