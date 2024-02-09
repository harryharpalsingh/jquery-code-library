using Newtonsoft.Json;
public class GetDataFromJsonFile
{
    public void GetCountryList()
    {
        try
        {
            // Read JSON file content
            string jsonFilePath = Server.MapPath("~/scripts/Global.json"); // Path to your JSON file
            string json = File.ReadAllText(jsonFilePath);

            // Deserialize JSON to object --> to use JsonConver --> include using Newtonsoft.Json through npm;
            dynamic data = JsonConvert.DeserializeObject(json);

            // Access the GetCountryList array
            var countryList = data.GetCountryList;

            // Bind data to dropdown
            ddlNationality.DataSource = countryList;
            ddlNationality.DataTextField = "name"; // Property to display in the dropdown
            ddlNationality.DataValueField = "index"; // Property to get the selected value
            ddlNationality.DataBind();
            ddlNationality.Items.Insert(0, new ListItem("--Select--", "-1"));
        }
        catch (Exception ex)
        {
            lblerr.Text = "System Error at loading country list : " + ex.Message.ToString();
        }
    }
}