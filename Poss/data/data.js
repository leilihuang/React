import Mock from 'mockjs'

let Random = Mock.Random;

Mock.mock(/\/getMenu\.json/,{
    "responseCode" : 1000,
    "Msg":"",
    "data|1-10":[{
        "title":Random.cparagraph(3,5),
        "icon":"",
        "children|1-4":[{
            "title":Random.cparagraph(3,5),
            "icon":"" 
        }]   
    }]
});  