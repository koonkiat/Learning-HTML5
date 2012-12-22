var DBG = 
{
    ta      : null,
    init    : function(document)
    {
        this.ta = document.createElement("textarea");
        this.ta.setAttribute('cols', 40);
        this.ta.setAttribute('rows', 30);
        this.ta.setAttribute('id', 'TA');
        document.body.appendChild(this.ta);
        this.ta.value = "DBG init()";
    },
    
    trace: function(text, isAppend)
    {
        if(isAppend)
        {
            this.ta.value += "\n"+text;
        }
        else
        {
            this.ta.value = text;
        }
    },
}

