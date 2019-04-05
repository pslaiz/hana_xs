function getUsername(){
  var username =  $.session.getUsername();
  return username;
}
// var result = "Hello World from User " + getUsername();

var query = "SELECT \"NAME\" FROM \"ZHANA_SCHEMA\".\"ZTEST\""; 
// var query = "INSERT INTO \"ZHANA_SCHEMA\".\"ZTEST\" VALUES('paul maccartney')";
var oConnection = $.db.getConnection(); 
var oStatement = oConnection.prepareStatement(query); 
oStatement.execute();

var oResultSet = oStatement.getResultSet();
var result = {
    records : [ ]   
}; 
while (oResultSet.next()) { 
  result.records.push({value: oResultSet.getString(1)}); 
}
oResultSet.close(); 
oStatement.close(); 
oConnection.close(); 

$.response.contentType = "application/json; charset=UTF-8"; 
$.response.setBody(JSON.stringify(result)); 
$.response.status = $.net.http.OK; 
$.response.setBody(result);