# AWS CLI Commands for reference

### Example of schedule expression with rates
aws events put-rule --schedule-expression "rate(5 minutes)" --name _rulename_

### Example of schedule expression with cron
aws events put-rule--schedule-expression"cron(0 12 * * ? *)" --name _rulename_
