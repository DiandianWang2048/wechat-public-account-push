export const config = {
    /**
     * 公众号配置
     */

    // 公众号APP_ID
    APP_ID: "wx3471db3194e574c2",
    // 公众号APP_SECRET
    APP_SECRET: "612afa5c0fe69eff30719e8e6389d7f4",
    // 模板消息id
    TEMPLATE_ID: "K5EuesDJ_M2xpmPoB2IaEt4AR4FHvPUxdC8OjLNXhw8",
    // 接收公众号消息的微信号，如果有多个，需要在[]里用英文逗号间隔，例如["wx1", "wx2"]
    USERS: ["okCsI6MT8IZbg68cmY1pipjiK2hY"],
     
    /**
     * 信息配置
     */

    /** 天气相关 */

    // 所在省份
    PROVINCE: "江西",
    // 所在城市
    CITY: "南昌",

    /** 生日相关 */

    // 生日，修改名字为对应需要显示的名字, data 仅填月日即可, 请严格按照示例填写
    BIRTHDAYS: [
      {"name": "小婷", "year": "2001", "date": "03-04"},
      {"name": "点点", "year": "2001", "date": "01-10"},
    ],

    /** 日期相关 */

    // 认识的日子，格式同上
    LOVE_DATE: "2020-11-24",


    /** 好文节选 */

    // 好文节选的内容类型
    // 可以填写【动画，漫画，游戏，小说，原创，网络，其他】； 随机则填写 ""
    LITERARY_PREFERENCE: ""


    }

// {{date.DATA}}  
// 城市：{{city.DATA}}  
// 天气：{{weather.DATA}}  
// 最低气温: {{min_temperature.DATA}}  
// 最高气温: {{max_temperature.DATA}}  
// 今天是我们认识的第{{love_day.DATA}}天
// {{birthday_message.DATA}}

// {{note_en.DATA}}  
// {{note_ch.DATA}}
