import boto3
import json

comprehend = boto3.client(service_name='comprehend', region_name='region')

text = "Ukraine and Russia exchange prisoners in landmark deal"

print('Calling DetectSentiment')
print(json.dumps(comprehend.detect_sentiment(Text=text, LanguageCode='en'), sort_keys=True, indent=4))
print('End of DetectSentiment\n')