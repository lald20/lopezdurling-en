#coding:utf-8
def client_list():
    return [
        {
            "IMAGE": "../static/img/clients/1.png",
            "NAME": "BB&M Publicidad",
            "URL": "#",
        },{
            "IMAGE": "../static/img/clients/2.png",
            "NAME": "MetroBank",
            "URL": "#",
        }
        ,{
            "IMAGE": "../static/img/clients/3.png",
            "NAME": "Óptica López",
            "URL": "#",
        }
        ,{
            "IMAGE": "../static/img/clients/4.png",
            "NAME": "Óptica López",
            "URL": "#",
        }
        
    ]

def preBuildPage(page, context, data):
    """
    Updates the context of the page to include: the page itself as {{ CURRENT_PAGE }}
    """

    # This will run for each page that Cactus renders.
    # Any changes you make to context will be passed to the template renderer for this page.

    extra = {
        "CURRENT_PAGE": page,
        "CLIENT_LIST": client_list(), 
        # Add your own dynamic context elements here!
    }

    context.update(extra)
    return context, data