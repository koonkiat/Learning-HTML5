var DBG = 
{
    ta      : null,
    init    : function(document, rows, cols)
    {
        this.ta = document.createElement("textarea");
        this.ta.setAttribute('cols', cols);
        this.ta.setAttribute('rows', rows);
        this.ta.setAttribute('id', 'TA');
        document.body.appendChild(this.ta);
        this.ta.value = "DBG init()";
    },
    
    trace: function(text, isClear)
    {
        if(isClear)
        {
            this.ta.value = text;
        }
        else
        {
            this.ta.value += "\n"+text;
        }
    },
}

