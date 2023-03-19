
using System.Text.Json;


    public class Base
{
    public int HP { get; set; }
    public int Attack { get; set; }
    public int Defense { get; set; }

    //[JsonProperty("Sp. Attack")]
    public int SpAttack { get; set; }

    //[JsonProperty("Sp. Defense")]
    public int SpDefense { get; set; }
    public int Speed { get; set; }
}

public class Name
{
    public string english { get; set; }
    public string japanese { get; set; }
    public string chinese { get; set; }
    public string french { get; set; }
}

public class Pokemon
{
    public int id { get; set; }
    public Name name { get; set; }
    public List<string> type { get; set; }
    public Base @base { get; set; }
}
