INSTRUCTIONS_RICHTEXT_FEATURES = [
    "h4",
]
MINIMAL_RICHTEXT_FEATURES = [
    "link",
    "footnote",
]
SIMPLE_RICHTEXT_FEATURES = ["bold", "italic", "ol", "ul", "link"]
RICHTEXT_FEATURES = [
    "h2",
    "h3",
    "h4",
    "bold",
    "italic",
    "ol",
    "ul",
    "hr",
    "link",
    "document-link",
    "image",
    "embed",
]
MAX_RELATED_LINKS = 3
MAX_OTHER_PAGES = 4
MAX_PAGE_SIZE = 9

POSITION_CHOICES = (("top", "Top"), ("bottom", "Bottom"))


PODCAST_PROVIDERS = [
    ("apple", "Apple"),
    ("spotify", "Spotify"),
    ("google", "Google"),
    ("amazon", "Amazon"),
]

CHARTS_CONFIG = """
{
    "charts": {
        "className": "",  # a class on the DOM element you want to render the chart on
        "data": [],  # an object array - optional. Take precedence over `url` or `dataID`
        "url": "",  # a data URL. Can be anything from CSV to JSON, or an API endpoint that returns JSON. Ignored if the data or dataID property is provided.
        "dataID": "",  # an ID used to fetch the data file from an API. Ignored if the url or data property is provided.
        "type": "",  # type of chart. Options are `bar`, `area`, `line`, `column`. This can be overwritten in the options config.
        "series": [],  # specifies the series rendered by this chart. The series mapping must have matching values (see mapping property).
        "mapping": {  # used to map the provided data to expected properties. It removes the limitation of column names.
            "series": "",  # name of the series column
            "year": "",  # name of the year column
            "value": "",  # name of the value column
        },
        "typeOptions": [],  # used to specify which chart type options are available. e.g. [{ value: 'bar', label: 'Bar Chart' }, { value: 'line', label: 'Line Chart' }],
        "yearRange": [],  # number array of length 2 - minimum and maximum year to show on the x-axis e.g. [2010, 2020] generates a range of years from 2010 to 2020.
        "excludeYears": [],  # number array - years to exclude from the x-axis year range. Used to eliminate gaps.
        "aggregator": "",  # two options - `sum` and `avg`. For multiple rows of the same year and series, a value of sum adds up all matching rows, and avg calculates their average.
        "filters": {  # used to filter specific columns e.g. see below
            "ownership": ["primary"],  # will filter the data, returning only rows that have ownership == primary.
        },
        "options": {},  # echarts options as specified here https://echarts.apache.org/en/option.html - use to customise your chart
        "selectors": [  # used to configure dropdown selectors that filter chart data in realtime. Allows chart specific change of context.
            {
                "data": [  # dropdown options - the value should match expected data in the valueProperty
                    {"value": "primary", "label": "Primary"},
                    {"value": "secondary", "label": "Secondary"},
                ],
                "url": "",  # for dynamic dropdown options - only one of this and data are required
                "label": "Select level",  # dropdown label
                "defaultValue": {"value": "all", "label": "Primary and secondary"},  # dropdown default value - use `all` for when no filter is active.
                "valueProperty": "value",  # maps to the value column in the data
                "labelProperty": "label",  # maps to the label column in the data
                "dataProperty": "level",  # maps to the data column in the data
            }
        ],
        "table": {  # when present & configured correctly, shows buttons that toggle between the chart view and table view
            "yearRange": [],  # same as chart yearRange
            "rows": ["Government", "Private"],  # maps a data row to a particular property/column - equivalent to a chart series
            "mapping": {  # maps data to expected options.
                "rows": "Type",  # row column name
                "year": "year",  # year column name
                "value": "Value",  # value column name
            },
        },
    }
}
"""
