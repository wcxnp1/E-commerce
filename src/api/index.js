import server from "@/ulist/api"

// 销售趋势模块
export const getSalesTrend = () => server({url:'/trend',method:'GET'})
// 商家销售统计模块
export const getSalesStatistics = () => server({url:'/seller',method:'GET'})
// 地区销售排行模块
export const getSalesRanking = () => server({url:'/rank',method:'GET'})
// 库存与销售分析模块
export const getSalesAnalysis = () => server({url:'/stock',method:'GET'})
// 热销商品模块
export const getHotSales = () => server({url:'/hot',method:'GET'})
// 商家分布模块
export const getSalesDistribution = () => server({url:'/map',method:'GET'})
