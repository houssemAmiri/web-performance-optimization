This repository contains a static web page with some typical performance. Source: https://github.com/jschroeter/hdm-webperformance

## Lighthouse report

![lighthouse report](image.png)

The goal is to optimize the application to have better web vitals score

## Exercise

- open the page with a slow internet connection (e.g. network throtteling of browser dev tools) and observe how the page loads and renders
- run and check web performance analysis with tools like https://web.dev/measure/, https://WebPageTest.org and Lighthouse
- implement improvements

## Ligthhouse report over changes

- make performance worst:
  ![score 9](image-1.png)
- correct images layout shift
  ![alt text](image-2.png)
- add web worker for heavy task 
![alt text](image-3.png)
- change google analytics to asynchronous , change css order , defer for jquery file
![alt text](image-4.png)
- Add async ro remove rendering blocking resources, minify jquery , default fonts
![alt text](image-5.png)
- minify jquery, add lazy load, update font usage 
![alt text](image-6.png)
- add fonts in the server, minify css 
![alt text](image-7.png)
- optomize images , correct css 
![alt text](image-8.png)