# stellar-raide-tariff-shield Monitoring

This directory contains configuration for stellar-raide-tariff-shield metrics, logging, and uptime monitoring.

## Uptime Monitoring

We use [Better Uptime](https://betteruptime.com) to track the availability of our services.

- **Status Page:** [https://status.stellar-raide-tariff-shield.com](https://status.stellar-raide-tariff-shield.com)
- **API Health Endpoint:** `https://api.stellar-raide-tariff-shield.com/health`
- **Web App Root:** `https://app.stellar-raide-tariff-shield.com/`

### Incident Acknowledgement

When an alert is fired:
1. **Email/SMS:** Click the "Acknowledge" link in the notification.
2. **Dashboard:** Go to the Better Uptime incidents page and click "Acknowledge" on the active incident.
3. **PagerDuty/Slack:** Use the integration buttons provided in the respective channels.

Acknowledging an incident stops further escalations (e.g., prevents the "down for 5 minutes" SMS/Call if already being handled).

## Health Checks

The API exports three health check endpoints:
- `/health`: Comprehensive check of process + database + Soroban RPC.
- `/health/ready`: Readiness probe for deployment gates (Kubernetes/Render).
- `/health/live`: Liveness probe (process heart-beat).

## Metrics & Dashboards

- **Prometheus:** Scrapes metrics from `/metrics` on the API.
- **Grafana:** Visualizes API performance, error rates, and Soroban health.
