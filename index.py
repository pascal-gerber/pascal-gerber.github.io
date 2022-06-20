from flask import *
import webbrowser
import threading
import random

#for starters, the link.
websiteLink = "http://127.0.0.1:5000/"

#defines the websitePage
app = Flask(__name__)

#browser module, simply opens it on the browser
def openBrowser():
    webbrowser.open(websiteLink)

#runs the website once executed
#simply running it will create a local link that stays the same
#http://127.0.0.1:5000/ 
def runWebsite():
    app.run(host='5.12.30.21', port=81)

    #app.run(host='0.0.0.0', port=81)
    #other option   /\

#a line is to create the main frontpage
@app.route('/')
def test():
    testvar = str(random.randint(1, 100))
    #heres something you can do with python on the browser directly
    return("<h1>this " + testvar + """ a test</h1>

<a href="/another">the other</a>""")#hyperlink to the other page
    
#add an app.route(Link) to create another page
@app.route('/another')
#the next function will be the next page made.
def another():
    return("<p>another website</p>")

#i made a thread so it works in the back of the pc
#otherwise it will not allow the code to do more than host this site.
createInstance = threading.Thread(target = runWebsite)
createInstance.start()

#opens it for you :D
openBrowser()
