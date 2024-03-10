// This file contains placeholder data that you'll be replacing with real data in the Data Fetching chapter:
// https://nextjs.org/learn/dashboard-app/fetching-data
const users = [
  {
    user_id: '410544b2-4001-4271-9855-fec4b6a6442a',
    user_name: '管理员',
    telephone: '13512630772',
    password: '123456',
    unit: '黑龙江大学',
    type: 'admin',
  },
];
const invite = [
  {
    company_id: 'didichuxing001',
    company_name: '滴滴出行',
    post_name: '前端开发工程师',
    post_abstract:
      '作为一名安卓开发工程师，您将负责开发和维护安卓手机应用客户端程序，确保其高效、稳定地运行。您需要与团队合作，进行项目管理和系统设计，同时与合作伙伴沟通并进行定制化移植。',
    post_duty: [
      '基于Android平台，负责Android手机应用客户端程序的开发和维护',
      '协助主管进行项目管理和系统设计；',
    ],
    post_require: [
      '本科及以上学历，计算机相关专业优先；',
      '2年以上Android开发经验，深入理解Java语言，扎实的编码基础；',
      '熟练使用Git、Android',
    ],
    more: ['有丰富的Android应用性能优化经验；'],
    district: '北京',
    discription:
      '关于我们DiDi Global Inc.（滴滴全球股份有限公司）是全球卓越的移动出行科技平台，在亚太、拉美等市场提供网约车、出租车召车、代驾、顺风车等多元化出行服务，并运营车服、外卖、货运业务。滴滴为车主、司机及骑手提供了灵活的工作和收入机会。滴滴致力于与各地监管部门、出租车行业、汽车产业等伙伴及社群积极协作，用本地化的人工智能技术推动智慧交通创新，共同解决全球交通、环保和就业挑战。滴滴将持续致力于提升用户体验，创造社会价值，建设安全、开放、可持续的未来移动出行和本地生活服务新生态。',
    user_id: '410544b2-4001-4271-9855-fec4b6a6442a',
    comment_id: 'comment-13512630772',
    education: '本科',
    prize: '19k~30k',
    comment_id_list: [],
  },
];
const comment = [
  {
    comment_id: '410544b2-4001-4271-9855-fec4b6a6442b',
    comment: '有人去面这家么？',
    comment_time: '2024-01-20 20:00',
    company_id: 'didichuxing001',
    user_id: '410544b2-4001-4271-9855-fec4b6a6442a',
    user_name: '管理员',
    answer_id_list: [],
  },
];

module.exports = {
  users,
  invite,
  comment
};
