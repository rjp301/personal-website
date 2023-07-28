---
title: Weather Station Constellation
tags:
  - Python
  - Cronjob
  - Third-Party API
  - Email Automation
  - SendGrid
  - Linux
  - NodeJS
  - Pandas
links:
  - url: https://github.com/rjp301/photo-portfolio-astro
    type: source
description: Python scripts running on Linux server to collect data from constellation of remote weather stations and send daily report to project management.
date: 2022-04
---

## Background

While working on a remote construction project in Northern BC in 2020, adverse weather events such as torrential rain and extreme cold caused substantial budget and schedule overages. As I was working for the contractor, they had to justify these overages to the client but struggled to do so do to the limited coverage of public weather stations in the remote area.

## Solution

I implemented a constellation of five internet-connected weather stations along with a Raspberry Pi server to record the weather along the construction project and produce a daily report. This report was distributed to upper management to inform them on their decisions for the day.

In 2022 the Pi stopped working so I deployed the codebase to a linux server hosted by [Linode](https://linode.com).

## Implementation

The weather stations are connected to [Weather Underground](https://www.wunderground.com/) for live data display and storage.

Function run as a CRON job for fetching weather data from the Weather Underground API, summarizing that data using Pandas and distributing it using the Gmail API.

Each function of the script is written in the most appropriate language for the job. Python is used for data manipulation and NodeJS is used for interfacing with APIs and generating HTML from templates.

## Outcome

As a result of this greatly enhanced weather data, my employer was able to get multi-million dollar change order requests approved.